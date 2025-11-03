interface LapsListProps {
    laps: string[];
  }
  
  export default function LapsList({ laps }: LapsListProps) {
    return (
      <div className="w-full max-w-sm mt-4">
        {laps.length === 0 ? (
          <p className="text-gray-400 text-center">No laps recorded</p>
        ) : (
          <ul className="space-y-1">
            {laps.map((lap, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-800 px-3 py-2 rounded-md"
              >
                <span>Lap {index + 1}</span>
                <span>{lap}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  