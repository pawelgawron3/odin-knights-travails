class Square {
  constructor(row, col) {
    this.Row = row;
    this.Col = col;
  }

  toString() {
    return `${this.Row}${this.Col}`;
  }
}

export { Square };
