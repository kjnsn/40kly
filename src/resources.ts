import { Application, Sprite, Assets } from "pixi.js";

interface Resources {
  city: Sprite;
  background: Sprite;
}

export async function loadResources(app: Application): Promise<Resources> {
  // load the texture we need
  const cityTexture = await Assets.load("data/city1.png");

  // Load the background
  const background = await Assets.load("data/back.jpg");

  // This creates a texture from the background image.
  const backgroundTex = new Sprite(background);
  const city = new Sprite(cityTexture);

  return {
    background: backgroundTex,
    city: city,
  };
}
