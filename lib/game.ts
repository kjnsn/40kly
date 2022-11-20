import { RootStore } from "./state/store";

interface Point {
  x: number;
  y: number;
}

export default class Game {
  private _updateCounter = 0;
  private reduxStore: RootStore;

  constructor(reduxStore: RootStore) {
    this.reduxStore = reduxStore;
  }

  isPaused(): boolean {
    return this.reduxStore.getState().game.isPaused;
  }

  incUpdateCounter() {
    this._updateCounter++;
  }

  get updateCounter(): number {
    return this._updateCounter;
  }
}
