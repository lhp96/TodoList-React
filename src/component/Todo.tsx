import { useState } from "react";

export function Todo() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask: any) => {
    setTasks((currentState) => [...currentState, newTask]);
  };

  return (
    <div>
      <input type="text" />
      <button>add</button>
      <div>
        <ul>
          {tasks.map((task) => (
            <li>task</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
