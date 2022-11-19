import Game from "../lib/game";

/**
 * Updates the game state on a render loop cycle. Called every cycle.
 * @param deltaMs The amount of milliseconds elapsed since the last loop cycle.
 * @param game A reference to the game instance.
 */
export default function update(deltaMs: number, game: Game) {
  // Skip updates if the game is paused, or if there is no time available.
  if (game.isPaused || deltaMs <= 0) {
    return;
  }

  game.incUpdateCounter();
}
