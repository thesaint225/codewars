function move(position, roll) {
    var totalMove = roll * 2;
    var newPosition = position + totalMove;
    return newPosition;
}
console.log(move(3, 6), typeof move());
