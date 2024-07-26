function move(position: number, roll: number): number {
  const totalMove = roll * 2;
  const newPosition = position + totalMove;
  return newPosition;
}
console.log(move(3, 6), typeof move());
