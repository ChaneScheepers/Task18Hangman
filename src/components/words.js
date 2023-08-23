/* I took a few words from https://www.idtech.com/blog/coding-terminology-list*/

let justSomeWords = [
  "algorithm",
  "argument",
  "arrays",
  "autonomous",
  "coding",
  "functions",
  "input",
  "java",
  "javaScript",
  "linux",
  "loops",
  "programming",
  "python",
  "programming",
  "scratch",
  "scripts",
  "statement",
  "programming",
  "variable",
];

//The below is the method to get a random word from the array above.
function randomWord() {
  return justSomeWords[Math.floor(Math.random() * justSomeWords.length)];
}

export { randomWord };
