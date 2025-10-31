import { isInside } from "./isInside.js";
import { Square } from "./square.js";

const knightDirections = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

function knightMoves(start, dest) {
  if (!(start instanceof Square) || !(dest instanceof Square)) {
    return "Wrong input";
  }

  if (!isInside(start) || !isInside(dest)) {
    return "Square is outside of standard 8x8 chessboard!";
  }

  const queue = [];
  const visited = new Set();
  const parent = new Map();

  queue.push(start);
  visited.add(start.toString());

  while (queue.length > 0) {
    const square = queue.shift();

    if (square.Row === dest.Row && square.Col === dest.Col) {
      return reconstructPath(start, dest, parent);
    }

    for (let [dr, dc] of knightDirections) {
      const next = new Square(square.Row + dr, square.Col + dc);
      const key = next.toString();

      if (isInside(next) && !visited.has(key)) {
        queue.push(next);
        visited.add(key);
        parent.set(key, square);
      }
    }
  }

  return "No path found";
}

function reconstructPath(start, dest, parent) {
  const path = [dest];
  let current = dest;

  while (current.toString() !== start.toString()) {
    current = parent.get(current.toString());
    path.unshift(current);
  }

  const pathToString = path.map((v) => `[${v.Row}, ${v.Col}]`).join("\n");

  return `You made it in ${
    path.length - 1
  } moves!\nHere's your path:\n${pathToString}`;
}

export { knightMoves };
