import Game from "../lib/game";
import { Resources } from "./resources";
import { utils } from "pixi.js";

/**
 * Updates the game state on a render loop cycle. Called every cycle.
 * @param deltaMs The amount of milliseconds elapsed since the last loop cycle.
 * @param game A reference to the game instance.
 */
export default function update(
  deltaMs: number,
  game: Game,
  resources: Resources
) {
  // Skip updates if the game is paused, or if there is no time available.
  if (game.isPaused()) {
    if (resources.city.playing) {
      resources.city.stop();
    }
    return;
  }

  // Ensure the city is blinking.
  if (!resources.city.playing) {
    resources.city.play();
  }

  game.incUpdateCounter();
}
