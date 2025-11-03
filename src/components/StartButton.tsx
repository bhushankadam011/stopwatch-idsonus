type Props = { onClick: () => void };

export default function StartButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-transparent border border-primary text-primary hover:text-white transition"
    >
      Start
    </button>
  );
}
