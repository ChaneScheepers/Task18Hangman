import React, { Component } from "react";
import img0 from "./Images/state1.GIF";
import img1 from "./Images/state2.GIF";
import img2 from "./Images/state3.GIF";
import img3 from "./Images/state4.GIF";
import img4 from "./Images/state5.GIF";
import img5 from "./Images/state6.GIF";
import img6 from "./Images/state7.GIF";
import { randomWord } from "./words";

//I had a lot of help from watching videos online.
//Class and methods below.
class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.restart.bind(this);
  }
  //The below takes the value entered and compares the data to see if its correct. If not adds to the incorrect count.
  handleGuess(e) {
    let letter = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      nWrong: st.nWrong + (st.answer.includes(letter) ? 0 : 1),
    }));
  }
  //The below creates an array of letters/buttons for entering. Maps through each to assign value and event..
  letterForGuess() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }
  //Takes the word and splits it into letters. 
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  //Resets everything and gets a new word from words.js
  restart() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  //the below compares if the correct letters where entered of the cap of wrong letters where reached. Its then prints out if won or lost.
  render() {
    let wrongGuess = this.state.nWrong;
    let isWinner = this.guessedWord().join("") === this.state.answer;
    let gamestate = this.letterForGuess();
    if (isWinner) gamestate = "You win";
    return (
      <div className="Hangman">
        <h1>Hangman Developer Addition</h1>
        {wrongGuess !== this.props.maxWrong && (
          <img
            src={this.props.images[this.state.nWrong]}
            alt={"You have made " + wrongGuess + " wrong guess."}
          />
        )}
        {wrongGuess === this.props.maxWrong && <h4>You Lose</h4>}
        <p>You have made {wrongGuess ? wrongGuess : "_"} wrong guess(s).</p>
        <p className="HangmanWord">
          {wrongGuess === this.props.maxWrong
            ? this.state.answer
            : this.guessedWord()}
        </p>
        <p className="HangmanButtons">{gamestate}</p>
      </div>
    );
  }
}

export default Hangman;
