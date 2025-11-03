type Props = { onClick: () => void };

export default function RestartButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-700 transition"
    >
      Restart
    </button>
  );
}
