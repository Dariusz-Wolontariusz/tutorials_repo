"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "./style.module.css";

type Task = {
  id: string;
  todo: string;
  isDone: boolean;
};

const TaskTracker = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [todo, setTodo] = useState<string>("");

  const handleAddTask = () => {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), todo: todo, isDone: false },
    ]);
  };

  const handleRemove = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleDone = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  return (
    <div>
      <div className={styles.main_container}>
        <h1>Task Tracker</h1>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="Add a new task"
            aria-label="Write your task here"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handleAddTask} aria-label="add a task button">
            Add a task
          </button>
        </div>
        {tasks.map((task) => (
          <div key={task.id} className={styles.task_container}>
            <p
              className={!task.isDone ? styles.task_name : styles.done}
              aria-label="a single task"
            >
              {task.todo}
            </p>
            <div className={styles.button_container}>
              <button
                onClick={() => handleDone(task.id)}
                className={styles.button}
              >
                Done
              </button>
              <button
                onClick={() => handleRemove(task.id)}
                className={styles.button}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTracker;
