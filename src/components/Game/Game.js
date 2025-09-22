import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { Row } from "./Row";
import { InputField } from "./InputField";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const answerArray = answer.split("");

function Game() {
  const [guesses, setGuesses] = useState([]);

  const gameState = () => {
    if (
      guesses.some((guess) =>
        guess.every((letter, idx) => letter === answerArray[idx])
      )
    ) {
      return "won";
    }

    if (guesses.length === 6) {
      return "lost";
    }

    return "playing";
  };

  return (
    <>
      <Row answer={answerArray} guess={guesses[0]} />
      <Row answer={answerArray} guess={guesses[1]} />
      <Row answer={answerArray} guess={guesses[2]} />
      <Row answer={answerArray} guess={guesses[3]} />
      <Row answer={answerArray} guess={guesses[4]} />
      <Row answer={answerArray} guess={guesses[5]} />
      <InputField
        onGuess={(guess) => setGuesses([...guesses, guess])}
        isDisabled={gameState() !== "playing"}
      />
      {gameState() === "won" && <p style={{ color: "green" }}>You won!</p>}
      {gameState() === "lost" && <p style={{ color: "red" }}>You lost!</p>}
    </>
  );
}

export default Game;
