export const ANIMALS: IAnimal[] = [
  { name: "bear", images: ["bear.gif", "bear2.gif"] },
  { name: "cat", images: ["cat.gif", "cat2.gif"] },
  { name: "chipmunk", images: ["chipmunk.gif", "chipmunk2.gif"] },
  { name: "cow", images: ["cow.gif"] },
  { name: "dog", images: ["giraffe.gif"] },
  { name: "duck", images: ["giraffe.gif"] },
  { name: "elephant", images: ["giraffe.gif"] },
  { name: "fox", images: ["giraffe.gif"] },
  { name: "frog", images: ["giraffe.gif"] },
  { name: "giraffe", images: ["giraffe.gif"] },
  { name: "hamster", images: ["giraffe.gif"] },
  { name: "hippo", images: ["giraffe.gif"] },
  { name: "lion", images: ["giraffe.gif"] },
  { name: "mouse", images: ["giraffe.gif"] },
  { name: "panda", images: ["giraffe.gif"] },
  { name: "penguin", images: ["giraffe.gif"] },
  { name: "pig", images: ["giraffe.gif"] },
  { name: "rabbit", images: ["giraffe.gif"] },
  { name: "reindeer", images: ["giraffe.gif"] },
  { name: "shark", images: ["giraffe.gif"] },
  { name: "sheep", images: ["giraffe.gif"] },
  { name: "snake", images: ["giraffe.gif"] },
  { name: "squirrel", images: ["giraffe.gif"] },
  { name: "tiger", images: ["giraffe.gif"] },
  { name: "unicorn", images: ["giraffe.gif"] },
  { name: "whale", images: ["giraffe.gif"] },
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
