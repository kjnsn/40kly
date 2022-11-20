import { Application, Sprite, Assets, Resource, Texture } from "pixi.js";

export interface Resources {
  city: Sprite;
  background: Sprite;
  createWell(): void;
}

/**
 * A fake resources class for use in tests.
 */
export class FakeResources implements Resources {
  city: Sprite = new Sprite();
  background: Sprite = new Sprite();

  createWell(): void {
    throw new Error("Method not implemented.");
  }
}

class LoadedResources implements Resources {
  readonly city: Sprite;
  readonly background: Sprite;

  constructor(
    cityTexture: Texture<Resource>,
    backgroundTexture: Texture<Resource>
  ) {
    this.background = new Sprite(backgroundTexture);
    this.city = new Sprite(cityTexture);
  }

  createWell(): void {
    throw new Error("Method not implemented.");
  }
}

/**
 * Loads the game resources (images, animations, etc) from the network and returns a Resources instance.
 * @returns A resources instance wrapped in a promise.
 */
export async function loadResources(): Promise<Resources> {
  // load the texture we need
  const cityTexture = await Assets.load("data/city1.png");

  // Load the background
  const background = await Assets.load("data/back.jpg");

  return new LoadedResources(cityTexture, background);
}
