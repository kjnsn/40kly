import assert from "assert";
import Game from "../../lib/game";
import update from "../../src/update";
import store from "../../lib/state/store";
import { FakeResources } from "../../src/resources";

describe("update", () => {
  const game = new Game(store);
  const resources = new FakeResources();

  it("increments the update counter", () => {
    assert.equal(game.updateCounter, 0);

    update(16, game, resources);

    assert.equal(game.updateCounter, 1);
  });
});
