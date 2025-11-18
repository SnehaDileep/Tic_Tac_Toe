import Square from "./components/Square"
import { useState } from "react"

function App() {

  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null)); 
  const [isXNext, setIsXNext] = useState(true);

  const winner = winningCombos(squares);
  const isDraw = !winner && squares.every(Boolean);
  const nextPlayer = isXNext ? 'X' : 'O';

  function  handleClick(index: number) {
    if (squares[index] || winner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = nextPlayer;
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

    const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "It's a draw!"
    : `Next player: ${nextPlayer}`;

    function restartGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  function winningCombos(squares: (string | null)[]) {
      const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
          squares[a] && 
          squares[a] === squares[b] && 
          squares[a] === squares[c]
        ){
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">
        <h1 className="text-5xl font-semibold mb-5 text-white font-fingerpaint text-center ">Tic Tac Toe</h1>
        {/* Status Display */}
        <div className={`text-center mb-4 text-xl font-bold ${winner ? 'text-green-500 animate-bounce' : isDraw ? 'text-red-500 animate-bounce' : 'text-white'}`}>
          {status}
        </div>
        {/* Game Board with Squares */}
        <div className="grid grid-cols-3 gap-1 rounded-2xl overflow-hidden mb-6">
            {/* Map through squares array */}
          {squares.map((value, index) => ( 
            // Render Square component
          <Square key={index} value={value} onClick={() => handleClick(index)} /> 
        ))}
        </div>
        {/* Restart Button */}'
        <button 
        onClick={restartGame}
        className="w-full  py-3 border rounded-lg bg-transparent hover:bg-indigo-700 text-white font-bold transition-colors duration-300">
          Restart Game
        </button>

      </div>
    </div>

  )
}

export default App
