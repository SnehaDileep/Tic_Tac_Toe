// Define props for Square component 
interface SquareProps { 
  value: string | null; // "X", "O", or null
  onClick: () => void; // Function that handles clicking a square
}
// Square component representing each cell in the Tic Tac Toe board
function Square({ value, onClick }: SquareProps) {
  return (
    // Button representing a square
    <button
      className={`h-32 w-full 
      bg-red-300 dark:bg-gray-800 rounded-md text-8xl transition-colors duration-200
      hover:bg-red-200 dark:hover:bg-gray-700 font-fingerpaint 
      ${value === 'X' ? "text-black dark:text-white"  : "text-gray-700 dark:text-slate-400"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
export default Square;