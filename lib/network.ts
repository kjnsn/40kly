class SteamNode {

}

class Pipe {

}

const INITIAL_NODE_CAPACITY = 50

/** Don't understand steam? Confused by the thought of
    boiling water being used as a source of energy?
    Why not just assume that it's electricity.
*/
class Steam {
  private readonly capacitance: number = 1
  private readonly charge: number = 0
  private readonly voltage: number = 0
  private readonly _capacity: number = INITIAL_NODE_CAPACITY

  get pressure (): number {
    return this.charge
  }

  get capacity (): number {
    return this._capacity
  }
}

class Network {}
