function removeDuplicateWords(s) {
  const words = s.split(" ");
  const uniqueWords = words
    .filter((word, index) => {
      return words.indexOf(word) === index;
    })
    .join(" ");
  return uniqueWords;
}

const removeDuplicateWords = (s) => [...new Set(s.split(" "))].join(" ");

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); //alpha beta gamma delta
