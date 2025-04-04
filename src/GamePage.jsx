import React from 'react';

function GamePage() {
  return (
    <div>
    <h1>Reversi Game 1</h1>
    <iframe src="https://minesweeper.wishalpha.com/" width="600" height="400" title="Reversi Game 1"></iframe>
    <h1>Reversi Game 2</h1>
    <iframe src="/games/67da84e9bf4f253af79c72b1-reversi/dist/index.html" width="600" height="400" title="Reversi Game 2"></iframe>
  </div>
  );
}

export default GamePage;