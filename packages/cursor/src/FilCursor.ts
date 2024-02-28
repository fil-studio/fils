import { MathUtils } from '@fils/math'

export interface CursorParameters {
  decimals?: number
  ease?: number
  normalized?: boolean
  states?: boolean
  hovers?: boolean // For hovers to work, states need to be set to true
}

interface Position {
  x: number
  y: number
}

export interface FilCursorState {
  id: string
  trigger: HTMLElement
}

interface States {
  current: FilCursorState
  previous: FilCursorState
}

export interface FilCursorListener {
  onStateChange?(toState: FilCursorState, fromState: FilCursorState)
  onHoverChange?(element: HTMLElement)
  onStillStart?()
  onStillEnd?()
}

export class FilCursor {
  listeners: FilCursorListener[] = []

  still: boolean
  stillTimer: ReturnType<typeof setTimeout>

  // Params
  decimals: number
  ease: number
  normalized: boolean
  states: boolean
  hovers: boolean

  // Positions
  position: Position
  positionNormalized: Position
  target: Position

  // State
  state: States
  hover: HTMLElement

  constructor(params?: CursorParameters) {
    this.decimals = 3
    this.ease = 0.3
    this.normalized = false
    this.states = false
    this.hovers = false

    this.still = false

    // Override with provided parameters
    if (params) {
      Object.assign(this, params)
    }

    if (this.hovers) {
      console.warn(
        'Fil Cursor - States check set to true due to hovers check set to true',
      )
      this.states = true
    }

    this.position = {
      x: 0,
      y: 0,
    }

    this.positionNormalized = {
      x: 0,
      y: 0,
    }
    this.target = {
      x: 0,
      y: 0,
    }

    this.state = {
      current: null,
      previous: null,
    }

    this.addEventListeners()
  }

  // Listeners
  addCursorListener(lis: FilCursorListener) {
    if (this.listeners.indexOf(lis) > -1) return
    this.listeners.push(lis)
  }
  removeCursorListener(lis: FilCursorListener) {
    this.listeners.splice(this.listeners.indexOf(lis), 1)
  }

  stillStart() {
    for (const lis of this.listeners) {
      if (lis && lis.onStillStart) lis.onStillStart()
    }
  }
  stillEnd() {
    if (!this.still) return
    for (const lis of this.listeners) {
      if (lis && lis.onStillEnd) lis.onStillEnd()
    }
  }

  addEventListeners() {
    window.addEventListener(
      'mousemove',
      (e: MouseEvent) => {
        if (this.stillTimer) clearTimeout(this.stillTimer)

        this.stillEnd()
        this.stillTimer = setTimeout(() => {
          this.still = true
          this.stillStart()
        }, 100)
        this.still = false

        this.target.x = e.clientX
        this.target.y = e.clientY
      },
      { passive: true },
    )
  }

  onStateChange() {
    for (const lis of this.listeners) {
      if (lis && lis.onStateChange)
        lis.onStateChange(this.state.current, this.state.previous)
    }
  }
  onHoverChange() {
    for (const lis of this.listeners) {
      if (lis && lis.onHoverChange) lis.onHoverChange(this.hover)
    }
  }

  toDecimals(num: number): number {
    return parseFloat(num.toFixed(this.decimals))
  }

  stateChange(state: FilCursorState = null) {
    if (state === this.state.current) return

    if (state === null) {
      this.state.previous = this.state.current
      this.state.current = state
      this.onStateChange()
      return
    }

    if (this.state.current === null) {
      this.state.previous = this.state.current
      this.state.current = state
      this.onStateChange()
      return
    }

    if (
      state.id === this.state.current.id &&
      state.trigger === this.state.current.trigger
    )
      return

    this.state.previous = this.state.current
    this.state.current = state

    this.onStateChange()
  }

  hoverChange(element: HTMLElement) {
    if (element === this.hover) return
    this.hover = element
    this.onHoverChange()
  }

  updatePosition() {
    this.position.x = MathUtils.lerp(this.position.x, this.target.x, this.ease)
    this.position.y = MathUtils.lerp(this.position.y, this.target.y, this.ease)

    this.position.x = this.toDecimals(this.position.x)
    this.position.y = this.toDecimals(this.position.y)
  }

  updateNormalized() {
    if (!this.normalized) return

    this.positionNormalized.x = MathUtils.map(
      this.position.x,
      0,
      window.innerWidth,
      0,
      1,
    )
    this.positionNormalized.y = MathUtils.map(
      this.position.y,
      0,
      window.innerHeight,
      0,
      1,
    )

    this.positionNormalized.x = this.toDecimals(this.positionNormalized.x)
    this.positionNormalized.y = this.toDecimals(this.positionNormalized.y)
  }

  updateStates() {
    if (!this.states) return

    let hover = false
    let state = false

    if (document.elementsFromPoint) {
      let elements = document.elementsFromPoint(
        this.position.x,
        this.position.y,
      )

      for (const el of elements) {
        if (el.hasAttribute('fil-cursor') && !state) {
          state = true
          const newState = {
            id: el.getAttribute('fil-cursor'),
            trigger: el,
          }
          this.stateChange(newState as FilCursorState)
        }
        if (this.hovers && !hover) {
          if (el.hasAttribute('fil-cursor-hover')) {
            hover = true
            this.hoverChange(el as HTMLElement)
          }
        }
      }

      if (!state) {
        this.stateChange(null)
      }

      if (!hover) {
        this.hoverChange(null)
      }
    }
  }

  update() {
    this.updatePosition()

    this.updateNormalized()

    this.updateStates()
  }
}
