import assert from "assert";
import { beforeEach, describe, it } from "mocha";
import Game from "../../lib/game";
import update from "../../src/update";
import store from "../../lib/state/store";
import { FakeResources } from "../../src/resources";

describe("update", () => {
  var game = new Game(store);
  const resources = new FakeResources();

  beforeEach(() => {
    game = new Game(store);
  });

  it("increments the update counter", () => {
    assert.equal(game.updateCounter, 0);

    update(16, game, resources);

    assert.equal(game.updateCounter, 1);
  });
});
