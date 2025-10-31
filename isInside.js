function isInside(square) {
  if (
    square.Row >= 0 &&
    square.Row <= 7 &&
    square.Col >= 0 &&
    square.Col <= 7
  ) {
    return true;
  } else {
    return false;
  }
}

export { isInside };
