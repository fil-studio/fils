import gsap from 'gsap'
import { AudioSettings } from './AudioUtils'

export interface AudioTrackParams {
    loop?: boolean
    volume?: number
    fadeIn?: number
}

export interface AudioTrack {
    source: AudioBufferSourceNode
    gain: GainNode
    nodes?: AudioNode[]
}

class AudioManagerClass {
    protected initialized: boolean = false
    mainGain?: GainNode
    context?: AudioContext
    protected lib: Record<string, AudioBuffer> = {}
    protected tracks: Record<string, AudioTrack[]> = {}

    protected _muted:boolean = false;

    get available(): boolean {
        return this.initialized;
    }

    get muted(): boolean {
        return this._muted
    }
  
    set muted(value: boolean) {
        this._muted = value
    }
    
    /**
     * Mutes or unmutes all audio
     * @param duration fade duration. Default is 0
     * @returns 
     */
    toggleMute(duration:number=0) {
        if (!this.initialized) {
            return console.warn('Audio not Initialized!')
        }
    
        this.muted = !this.muted

        if(!this.mainGain) return;

        gsap.to(this.mainGain.gain, {
            value: this.muted ? 0 : 1,
            overwrite: true,
            duration
        })
    }

    /**
     * Inits the Audio Manager 
     * @param basePath Base URL for audio files
     */
    init(basePath:string = '') {
        if (this.initialized) {
            return console.warn('Audio Manager already Initialized')
        }
        AudioSettings.baseURL = basePath;
        this.initialized = true
        this.context = new AudioContext()
        this.mainGain = this.context.createGain()
        this.mainGain.connect(this.context.destination)
        console.log('Audio Manager initialized')
    }

    /**
     * Adds a sample to the library
     * @param id Audio ID
     * @param path Audio file path
     */
    async addSample(id: string, path: string) {
        if (!this.context) {
            return console.warn('Audio Manager not initialized!')
        }
        if (this.lib[id]) {
            return console.warn(`Track ${id} already defined!`)
        }

        try {
            const response = await fetch(path)
            const buffer = await this.context.decodeAudioData(
                await response.arrayBuffer(),
            )
            this.lib[id] = buffer
            console.log(`Audio Track ${id} added successfully!`)
        } catch (err) {
            console.error(`Unable to fetch the audio file. Error: ${err}`)
        }
    }

    /**
     * Creates a new MediaElementAudioSourceNode
     * @param a HTMLAudioElement instance
     * @returns MediaElementAudioSourceNode instance if successful, null otherwise
     */
    createMediaElementTrack(a: HTMLAudioElement): MediaElementAudioSourceNode|null {
        if (!this.context || !this.mainGain) {
            console.warn('Audio Manager not initialized!')
            return null;
        }
        const src = this.context.createMediaElementSource(a)
        src.connect(this.mainGain)

        return src
    }

    /**
    * Loads an audio file asynchronously
    * and plays it right away
    * @param path url to the audio file
    */
    loadAndPlay(path: string, callback?: Function) {
        if (!this.context || !this.mainGain) {
            console.warn('Audio Manager not initialized!')
            return null;
        }
        if (this.mainGain.gain.value < 0.001) return
        fetch(path).then((response) => {
            response.arrayBuffer().then((buffer) => {
                if (!this.context || !this.mainGain) return;
                this.context.decodeAudioData(buffer).then((audioBuff) => {
                    if (!this.context || !this.mainGain) return;
                    const src = this.context.createBufferSource()
                    src.buffer = audioBuff
                    src.connect(this.mainGain)
                    src.start()
                    if (callback) callback(src)
                })
            })
        }).catch((err) => {
            console.error('Audio Manager Error:', err.message)
        });
    }

    /**
     * Creates and plays new track from the library
     * @param id id of library track
     * @param params playing parameters
     * @returns AudioTrack instance if successful, null otherwise
     */
    playTrack(id: string, params: AudioTrackParams = {}): AudioTrack|null {
        if (!this.context || !this.mainGain) {
            console.warn('Audio Manager not initialized!')
            return null
        }

        if (!this.lib[id]) {
            console.warn(`Library sample for ${id} not defined!`)
            return null
        }

        console.log(`AudioManager: Play New Track for ${id}`)

        const gain = this.context.createGain()
        if (params.fadeIn) {
            gain.gain.value = 0
            gsap.to(gain.gain, {
                duration: params.fadeIn,
                overwrite: true,
                value: 1,
            })
        } else {
            gain.gain.value = params.volume !== undefined ? params.volume : 1
        }
        gain.connect(this.mainGain)

        const src = this.context.createBufferSource()
        src.loop = params.loop === true
        src.buffer = this.lib[id]
        src.connect(gain)
        src.start()

        const track: AudioTrack = {
            source: src,
            gain,
        }

        if (!this.tracks[id]) {
            this.tracks[id] = [track]
        } else {
            this.tracks[id].push(track)
        }

        if(!src.loop) {
            // auto clear non looping tracks
            src.onended = () => {
                this.clearTrack(id, track)
            }
        }

        return track
    }

    /**
     * Clears a track from the playing list
     * @param id library id
     * @param track track instance
     * @param fadeOut fade out duration. Default is 0
     */
    clearTrack(id: string, track: AudioTrack, fadeOut: number = 0) {
        if (this.tracks[id].splice(this.tracks[id].indexOf(track), 1)) {
            if (fadeOut) {
            // fade out gain
            const gain = track.gain.gain
            gsap.to(gain, {
                duration: fadeOut,
                overwrite: true,
                value: 0,
                onComplete: () => {
                    this.clearSourceNode(track.source)
                },
            })
            } else {
                this.clearSourceNode(track.source)
            }
        }
    }

    /**
     * Stop AudioTrack instance
     * @param track AudioTrack instance
     * @param fadeOut Fade out duration. Default is 0
     */
    stopTrack(track: AudioTrack, fadeOut: number = 0) {
        for (const id in this.tracks) {
            this.clearTrack(id, track, fadeOut)
        }
    }

    /**
     * Clears AudioBufferSourceNode instance
     * @param source AudioBufferSourceNode instance
     */
    clearSourceNode(source: AudioBufferSourceNode) {
        try {
            source.stop()
            source.disconnect()
        } catch (err) {}
    }

    /**
     * Fades out running track. Note that this will not stop the track.
     * This functionality is useful for fading out background music loops
     * @param track AudioTrack instance
     * @param duration Fade out duration. Default is 0
     * @returns 
     */
    fadeOut(track:AudioTrack, duration:number=0) {
        if (!this.initialized) {
            console.warn('Audio Manager not initialized!')
            return null
        }
        const gain = track.gain.gain
        gsap.to(gain, {
            duration,
            overwrite: true,
            value: 0
        })
    }

    /**
     * Fades in running track. Note that this will not play the track.
     * This functionality is useful for fading in background music loops
     * @param track AudioTrack instance
     * @param duration Fade in duration. Default is 0
     * @returns 
     */
    fadeIn(track:AudioTrack, duration:number=0) {
        if (!this.initialized) {
            console.warn('Audio Manager not initialized!')
            return null
        }
        const gain = track.gain.gain
        gsap.to(gain, {
            duration,
            overwrite: true,
            value: 1
        })
    }
}

/**
 * Singleton instance of AudioManager Class
 * Remember to call init() before using any other methods
 */
export const AudioManager = new AudioManagerClass();