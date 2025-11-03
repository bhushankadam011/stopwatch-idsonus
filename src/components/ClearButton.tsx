type Props = { onClick: () => void };

export default function ClearButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="mt-2 px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700 transition"
    >
      Clear Laps
    </button>
  );
}
