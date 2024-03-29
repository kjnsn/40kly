import { RootStore } from './state/store'

export default class Game {
  private _updateCounter = 0
  private readonly reduxStore: RootStore

  constructor (reduxStore: RootStore) {
    this.reduxStore = reduxStore
  }

  isPaused (): boolean {
    return this.reduxStore.getState().game.isPaused
  }

  incUpdateCounter (): void {
    this._updateCounter++
  }

  get updateCounter (): number {
    return this._updateCounter
  }
}
