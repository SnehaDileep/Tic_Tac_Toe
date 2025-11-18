import Square from "./components/Square"
import { useState } from "react"

function App() {
  // State to store the board (9 squares, initially all null)
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null)); 
  //[x,null,null,
  // null,0,null,
  // null,null,null]
  const [isXNext, setIsXNext] = useState(true); // State to keep track of whose turn it is (X starts first)

  const winner = winningCombos(squares); // Check if someone has won
  const isDraw = !winner && squares.every(Boolean); // Check for draw (no winner + board completely filled)
  const nextPlayer = isXNext ? 'X' : 'O'; // Determine next player

  // Handle clicking on a square . Do nothing if square already filled or a winner exists
  function  handleClick(index: number) { 
    if (squares[index] || winner) {
      return;
    }
    const newSquares = [...squares]; // Create a shallow copy of squares. Creates a new array using spread syntax. spread or expand the elements of an iterable (like an array) into another array, object, or function call.
    //const newSquares = squares.slice(); Creates a new array with the same contents .slice() works only on arrays.
    newSquares[index] = nextPlayer; // Assign X or O
    setSquares(newSquares); 
    setIsXNext(!isXNext); // Switch player
  }

    // Status message shown above the board
    const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "It's a draw!"
    : `Next player: ${nextPlayer}`;

    // Restart the game
    function restartGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  // Function to check winning combinations
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

    // Loop through each winning combination
    for (const [a, b, c] of lines) {
      if (
          squares[a] && 
          squares[a] === squares[b] && 
          squares[a] === squares[c]
        ){
        return squares[a]; // Return "X" or "O"
      }
    }
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">
        <h1 className="text-5xl font-semibold mb-5 text-white font-fingerpaint text-center ">Tic Tac Toe</h1>
        {/* Status Display */}
        <div className={`text-center mb-4 text-2xl font-Raleway font-bold ${winner ? 'text-green-500 animate-bounce' : isDraw ? 'text-red-500 animate-bounce' : 'text-white'}`}>
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
        className="w-full  py-3 border rounded-lg bg-transparent hover:bg-purple-00 text-white font-bold font-Raleway transition-colors duration-300">
          Restart Game
        </button>

      </div>
    </div>

  )
}

export default App
