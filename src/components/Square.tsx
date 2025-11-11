interface SquareProps {
  value: string | null;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      className="w-20 h-20 border-2 border-slate-700 text-3xl font-bold text-white flex items-center justify-center hover:bg-slate-700 transition"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
export default Square;