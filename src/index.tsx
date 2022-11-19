import { Application } from "pixi.js";
import React from "react";
import { createRoot } from "react-dom/client";
import Game from "../lib/game";
import Page from "./interface/page";
import { loadResources } from "./resources";
import update from "./update";

import "./reset.css";
import "./index.css";

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
// document.body.appendChild(app.view as any);

const game = new Game();

loadResources(app).then((resources) => {
  // Setup the position of the background.
  resources.background.x = 0;
  resources.background.y = 0;

  // Setup the position of the city.
  resources.city.x = app.view.width / 2 - resources.city.width / 2;
  resources.city.y = app.view.height / 2 - resources.city.height / 2;

  // Add the background to the scene we are building
  app.stage.addChild(resources.background);

  app.stage.addChild(resources.city);

  // Add the city on top.
  // Listen for frame updates
  app.ticker.add((deltaMs) => {
    update(deltaMs, game);
  });
});

const root = document.createElement("div");
document.body.appendChild(root);

createRoot(root).render(<Page gameCanvas={app.view} />);