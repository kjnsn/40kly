import {
  Application,
  Sprite,
  Assets,
  Resource,
  Texture,
  AnimatedSprite,
  Graphics,
  DisplayObject,
} from "pixi.js";

export interface Resources {
  city: AnimatedSprite;
  background: Sprite;
  createWell(point: Point): DisplayObject;
}

interface Point {
  x: number;
  y: number;
}

/**
 * A fake resources class for use in tests.
 */
export class FakeResources implements Resources {
  city: AnimatedSprite = new AnimatedSprite(
    [{ texture: Texture.EMPTY, time: 0 }],
    /* autoUpdate= */ false
  );
  background: Sprite = new Sprite();

  createWell(point: Point): Sprite {
    return new Sprite();
  }
}

class LoadedResources implements Resources {
  readonly city: AnimatedSprite;
  readonly background: Sprite;

  private wellTexture: Texture<Resource>;

  constructor(
    city: AnimatedSprite,
    backgroundTexture: Texture<Resource>,
    wellTexture: Texture<Resource>
  ) {
    this.background = new Sprite(backgroundTexture);
    this.city = city;
    this.wellTexture = wellTexture;
  }

  /**
   * Creates a steam well sprite.
   * @param point The x and y position to place the well on.
   * @returns A sprite for a steam well.
   */
  createWell(point: Point): DisplayObject {
    // TODO: Well sprite is not drawing, so create a placeholder square.
    // const well = new Sprite(this.wellTexture);

    const graphics = new Graphics();
    graphics.beginFill(0xde3249);
    graphics.drawRect(0, 0, 16, 16);
    graphics.endFill();

    graphics.x = point.x;
    graphics.y = point.y;

    return graphics;
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
  // load the textures
  const [city, background, well] = [
    await loadCityAnimation(),
    await Assets.load("data/back.jpg"),
    await Assets.load("data/well.png"),
  ];

  return new LoadedResources(city, background, well);
}
