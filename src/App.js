import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import "./styles/root.scss";
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is${winner}`
    : `Next player is ${isXNext ? "X" : "0"}`;
  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "0";
        }
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h1>{message}</h1>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
