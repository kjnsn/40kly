import { Application, Sprite, Assets } from "pixi.js";
import Game from "../lib/game";
import update from "./update";

const backgroundWidth = 721;
const backgroundHeight = 726;

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new Application({
  width: backgroundWidth,
  height: backgroundHeight,
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view as any);

// load the texture we need
const cityTexture = await Assets.load("data/city1.png");

// Load the background
const background = await Assets.load("data/back.jpg");

const game = new Game();

// This creates a texture from the background image.
const backgroundTex = new Sprite(background);
const city = new Sprite(cityTexture);

// Setup the position of the background.
backgroundTex.x = 0;
backgroundTex.y = 0;

// Setup the position of the city.
city.x = app.view.width / 2 - city.width / 2;
city.y = app.view.height / 2 - city.height / 2;

// Add the background to the scene we are building
app.stage.addChild(backgroundTex);

// Add the city on top.
app.stage.addChild(city);

// Listen for frame updates
app.ticker.add((deltaMs) => {
  update(deltaMs, game);
});
