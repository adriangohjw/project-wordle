export const Row = ({ answer, guess }) => {
  return (
    <p className="guess">
      {guess === undefined ? (
        <UnfilledRow />
      ) : (
        <FilledRow guess={guess} answer={answer} />
      )}
    </p>
  );
};

const UnfilledRow = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <span className="cell" key={index}></span>
  ));
};

const FilledRow = ({ guess, answer }) => {
  const nonOverlappingLetters = answer.filter(
    (letter, i) => letter !== guess[i] && guess.includes(letter)
  );

  return guess.map((letter, index) => {
    const className = () => {
      if (answer[index] === letter) return "correct";
      if (nonOverlappingLetters.includes(letter)) return "misplaced";
      return "incorrect";
    };
    return (
      <span className={`cell ${className()}`} key={index}>
        {letter}
      </span>
    );
  });
};
