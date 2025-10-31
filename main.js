import { knightMoves } from "./knightMoves.js";
import { Square } from "./square.js";

// Example
let start = new Square(0, 0);
let dest = new Square(7, 7);

console.log(knightMoves(start, dest));
