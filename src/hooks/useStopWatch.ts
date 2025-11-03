import { useCallback, useEffect, useRef, useState } from "react";

export interface StopwatchState {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  laps: string[];
}

export function useStopwatch() {
  const [state, setState] = useState<StopwatchState>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
    laps: [],
  });

  const intervalRef = useRef<number | null>(null);

  const formatTime = useCallback(
    (h: number, m: number, s: number) =>
      `${h.toString().padStart(2, "0")}:${m
        .toString()
        .padStart(2, "0")}:${s.toString().padStart(2, "0")}`,
    []
  );

  const start = useCallback(() => {
    if (state.isRunning) return;

    setState((prev) => ({ ...prev, isRunning: true }));

    intervalRef.current = window.setInterval(() => {
      setState((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
        return { ...prev, hours, minutes, seconds };
      });
    }, 1000);
  }, [state.isRunning]);

  const stop = useCallback(() => {
    if (!state.isRunning) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const formatted = formatTime(state.hours, state.minutes, state.seconds);
    setState((prev) => ({
      ...prev,
      isRunning: false,
      laps: [...prev.laps, formatted],
    }));
  }, [state.isRunning, state.hours, state.minutes, state.seconds, formatTime]);

  const reset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
      laps: [],
    });
  }, []);

  const clearLaps = useCallback(() => {
    setState((prev) => ({ ...prev, laps: [] }));
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return {
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    isRunning: state.isRunning,
    laps: state.laps,
    start,
    stop,
    reset,
    clearLaps,
  };
}


