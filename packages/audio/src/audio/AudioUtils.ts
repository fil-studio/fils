import { AudioManager } from "./AudioManager";

export type AudioDefinition = {
    id: string;
    url: string;
};

export const AudioSettings = {
    baseURL: "",
}

async function addAudios(audios:AudioDefinition[]) {
    console.log('Creating Audio Library...');
    console.log('Using base URL:', AudioSettings.baseURL);
    for(const audio of audios) {
        await AudioManager.addSample(audio.id, `${AudioSettings.baseURL}${audio.url}`);
    }

    console.log('Audio Library created!');
}

async function init(audios:AudioDefinition[], onInt?:Function) {
    AudioManager.init();
    await addAudios(audios);
    if(onInt) onInt();
}

export function initAudio(isDesktop:boolean, audios:AudioDefinition[], onInt?:Function) {
    if(isDesktop) {
        init(audios, onInt);
    }
    else {
        window.onclick = () => {
            if(AudioManager.available) return;
            init(audios, onInt);
        }
    }
}