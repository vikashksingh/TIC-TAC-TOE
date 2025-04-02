import { useState } from "react";

export default function GameBoard({ handleSelectSquare, gameBoard }) {
  // const gameBoard = initialGameBoard;
  // if (turns.length) {
  //   turns.map(item => {
  //     const { state, player } = item;
  //     const { row, col } = state;
  //     gameBoard[row][col] = player;
  //   });
  // }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleGameBoardState(rowIndex, colIndex) {
  //   setGameBoard(prevGameBoard => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map(innerArray => [...innerArray])
  //     ];
  //     updatedBoard[rowIndex][colIndex] = player;
  //     return updatedBoard;
  //   });
  //   handleSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
