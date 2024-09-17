import React, { useState } from "react";
import './Task.css'

const TaskList = ({ currentUser, logoutUser }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    } else {
      alert("Please enter a task");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="tasklist">
      <h2>Welcome, {currentUser.username}</h2>
      <button onClick={logoutUser} className="btn">Logout</button>

      <h3>Task Management</h3>
      <input
      className=" input-box"
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask} className="btn">Add Task</button>

      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <span>{task}</span>
            <button onClick={() => removeTask(index)} className="btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
