import {
  Application,
  Sprite,
  Assets,
  Resource,
  Texture,
  AnimatedSprite,
} from "pixi.js";

export interface Resources {
  city: AnimatedSprite;
  background: Sprite;
  createWell(): void;
}

/**
 * A fake resources class for use in tests.
 */
export class FakeResources implements Resources {
  city: AnimatedSprite = new AnimatedSprite([]);
  background: Sprite = new Sprite();

  createWell(): void {
    throw new Error("Method not implemented.");
  }
}

class LoadedResources implements Resources {
  readonly city: AnimatedSprite;
  readonly background: Sprite;

  constructor(city: AnimatedSprite, backgroundTexture: Texture<Resource>) {
    this.background = new Sprite(backgroundTexture);
    this.city = city;
  }

  createWell(): void {
    throw new Error("Method not implemented.");
  }
}

async function loadCityAnimation(): Promise<AnimatedSprite> {
  const [city1, city2, city3] = await Promise.all([
    Assets.load("data/city-frame-0.png"),
    Assets.load("data/city-frame-1.png"),
    Assets.load("data/city-frame-2.png"),
  ]);

  return new AnimatedSprite([
    {
      texture: city1,
      time: 1000,
    },
    {
      texture: city2,
      time: 50,
    },
    {
      texture: city3,
      time: 100,
    },
  ]);
}

/**
 * Loads the game resources (images, animations, etc) from the network and returns a Resources instance.
 * @returns A resources instance wrapped in a promise.
 */
export async function loadResources(): Promise<Resources> {
  // load the texture we need
  const city = await loadCityAnimation();

  // Load the background
  const background = await Assets.load("data/back.jpg");

  return new LoadedResources(city, background);
}
