import React from "react";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function GameOverBanner({ gameStatus, numOfGuesses, answer, handleRestart }) {
  if (gameStatus === "won") {
    return <WonBanner numOfGuesses={numOfGuesses} />;
  }

  return <LostBanner answer={answer} handleRestart={handleRestart} />;
}

export default GameOverBanner;
