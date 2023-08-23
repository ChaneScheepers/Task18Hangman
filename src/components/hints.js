let justSomeHints = [
  "There’s always a 9 out of 10 chance that the secret word contains a vowel. Starting off by guessing a vowel such as ‘a’, ‘e’, or ‘i’ helps you narrow down what the secret word could be because at this point you already know how many letters the word contains.",
  "Once the hangman is fully drawn, you loose. You get 11 try's.",
  "The word can be a language, something we use in coding or a verb.",
  "If you cannot guess the word, press restart and try something else.",
  "Each _ represents a letter.",
  "Each letter can only be used 1 time.",
];

//The below is the method to get a random word from the array above.
function randomHint() {
  return justSomeHints[Math.floor(Math.random() * justSomeHints.length)];
}

export { randomHint };
