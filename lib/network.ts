class SteamNode {
  constructor() {}
}

class Pipe {
  constructor() {}
}

const INITIAL_NODE_CAPACITY = 50;

/** Don't understand steam? Confused by the thought of
    boiling water being used as a source of energy?
    Why not just assume that it's electricity.
*/
class Steam {
  private capacitance: number = 1;
  private charge: number = 0;
  private voltage: number = 0;
  private _capacity: number = INITIAL_NODE_CAPACITY;

  get pressure(): number {
    return this.charge;
  }

  get capacity(): number {
    return this._capacity;
  }
}

class Network {}
