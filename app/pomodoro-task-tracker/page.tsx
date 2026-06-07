"use client";

import React from "react";
import { useState, useEffect, Suspense } from "react";
import styles from "./style.module.css";

const PomodoroTracker = () => {
  const [countdown, setCountdown] = useState<number>(1500);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const minutesDisplay = Math.floor(countdown / 60);
  const secondsDisplay = countdown % 60;
  const paddedMinutes = String(minutesDisplay).padStart(2, "0");
  const paddedSeconds = String(secondsDisplay).padStart(2, "0");

  useEffect(() => {
    if (!isRunning) return;

    const counter = setInterval(
      () =>
        setCountdown((prev: number) => {
          if (prev > 0) {
            return prev - 1;
          }
          setIsRunning(false);
          return 0;
        }),
      1000,
    );
    return () => clearInterval(counter);
  }, [isRunning]);

  return (
    <div>
      <h1>Pomodoro Tracker</h1>
      <div className={styles.timer_container}>
        <Suspense fallback="Loading...">
          <div className={styles.minutes}>
            {paddedMinutes} : {paddedSeconds}
          </div>
        </Suspense>

        <div className={styles.button_container}>
          <button
            className={styles.button}
            onClick={() => setIsRunning((prev) => !prev)}
          >
            {!isRunning ? "Play" : "Pause"}
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setCountdown(1500);
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTracker;
