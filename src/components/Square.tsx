// Define props for Square component 
interface SquareProps { 
  value: string | null;
  onClick: () => void; 
}
// Square component representing each cell in the Tic Tac Toe board
function Square({ value, onClick }: SquareProps) {
  return (
    // Button representing a square
    <button
      className={`h-32 w-full bg-gray-800 rounded-md text-6xl transition-colors duration-200 hover:bg-gray-700 font-fingerpaint ${value === 'X' ? "text-white"  : "text-slate-400"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
export default Square;