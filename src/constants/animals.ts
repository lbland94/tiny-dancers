export const ANIMALS: IAnimal[] = [
  { name: "bear", images: ["bear.gif", "bear2.gif"] },
  { name: "cat", images: ["cat.gif", "cat2.gif"] },
  { name: "chipmunk", images: ["chipmunk.gif", "chipmunk2.gif"] },
  { name: "cow", images: ["cow.gif"] },
  { name: "dog", images: ["dog.gif"] },
  { name: "duck", images: ["duck.gif"] },
  { name: "elephant", images: ["elephant.gif"] },
  { name: "fox", images: ["fox.gif"] },
  { name: "frog", images: ["frog.gif"] },
  { name: "giraffe", images: ["giraffe.gif"] },
  { name: "hamster", images: ["hamster.gif"] },
  { name: "hippo", images: ["hippo.gif"] },
  { name: "lion", images: ["lion.gif"] },
  { name: "mouse", images: ["mouse.gif"] },
  { name: "panda", images: ["panda.gif"] },
  { name: "penguin", images: ["penguin.webp"] },
  { name: "pig", images: ["pig2.webp"] },
  { name: "rabbit", images: ["rabbit.gif"] },
  { name: "reindeer", images: ["reindeer.gif"] },
  { name: "shark", images: ["shark.gif"] },
  { name: "sheep", images: ["sheep.gif"] },
  { name: "snake", images: ["snake.gif"] },
  { name: "squirrel", images: ["squirrel.gif"] },
  { name: "tiger", images: ["tiger.gif"] },
  { name: "unicorn", images: ["unicorn.gif"] },
  { name: "whale", images: ["whale.gif"] },
  { name: "giraffe", images: ["giraffe.gif"] },
  { name: "giraffe", images: ["giraffe.gif"] },
  { name: "giraffe", images: ["giraffe.gif"] },
  { name: "giraffe", images: ["giraffe.gif"] },
  { name: "giraffe", images: ["giraffe.gif"] },
  { name: "giraffe", images: ["giraffe.gif"] },
  { name: "farrah", images: ["farrah.gif"], large: true },
];

export interface IAnimal {
  name: string;
  images: string[];
  large?: boolean;
}
