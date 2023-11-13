import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(evn) {
    evn.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="guess"
        value={tentativeGuess}
        onChange={(evn) => {
          const nextGuess = evn.target.value.toUpperCase();

          setTentativeGuess(nextGuess);
        }}
        required
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
