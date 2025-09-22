import { useState } from "react";

export const InputField = ({ onGuess, isDisabled }) => {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length !== 5) {
          window.alert("Please enter a 5-letter word");
          return;
        }
        onGuess(guess.toUpperCase().split(""));
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        disabled={isDisabled}
      />
      {guess.length > 5 && (
        <p style={{ color: "red" }}>Please enter a 5-letter word</p>
      )}
    </form>
  );
};
