interface Point {
  x: number;
  y: number;
}

export default class Game {
  isPaused: boolean = false;
  private _updateCounter = 0;

  incUpdateCounter() {
    this._updateCounter++;
  }

  get updateCounter(): number {
    return this._updateCounter;
  }
}
