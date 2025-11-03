import Hours from "./components/Hours";
import Minutes from "./components/Minutes";
import Seconds from "./components/Seconds";
import StartButton from "./components/StartButton";
import PauseButton from "./components/PauseButton";
import RestartButton from "./components/RestartButton";
import LapsList from "./components/LapList";
import ClearButton from "./components/ClearButton";
import { useStopwatch } from "./hooks/useStopWatch";

export default function App() {
  const {
    hours,
    minutes,
    seconds,
    isRunning,
    laps,
    start,
    stop,
    reset,
    clearLaps,
  } = useStopwatch();

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >

      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 tracking-wide drop-shadow-lg">
          Stopwatch
        </h1>

        <div className="text-7xl sm:text-8xl font-mono mb-8 flex gap-3 justify-center items-center select-none">
          <Hours value={hours} />
          <span className="opacity-70">:</span>
          <Minutes value={minutes} />
          <span className="opacity-70">:</span>
          <Seconds value={seconds} />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {!isRunning ? (
            <StartButton onClick={start} />
          ) : (
            <PauseButton onClick={stop} />
          )}
          <RestartButton onClick={reset} />
        </div>

        {laps.length > 0 && (
          <div className="w-full max-w-sm mx-auto bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
            <LapsList laps={laps} />
            <div className="mt-4">
              <ClearButton onClick={clearLaps} />
            </div>
          </div>
        )}

    <img
            src="/stopwatch-bg.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
            loading="lazy"
          />
      </div>
    </main>
  );
}
