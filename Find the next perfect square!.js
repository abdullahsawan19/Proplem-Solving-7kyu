function findNextSquare(sq) {
    // Check if the input is a perfect square
    const sqrt = Math.sqrt(sq);
    if (sqrt % 1 !== 0) {
      // If not, return -1
    return -1;
    }
    // Calculate the next perfect square
    const nextSquare = (sqrt + 1) ** 2;
    return nextSquare;
}





function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}




console.log(findNextSquare(121)); // Output: 144
console.log(findNextSquare(625)); // Output: 676
console.log(findNextSquare(114)); // Output: -1