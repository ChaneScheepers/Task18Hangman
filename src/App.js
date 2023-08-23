import React from "react";
import "./App.css";
import Hangman from "./components/hangman";
import Header from "./components/header";
import Hint from "./components/hint";

function App() {
  return (
    <div className="App">
      <Header />
      <Hint />
      <Hangman />
    </div>
  );
}

export default App;
