import React, { useState } from "react";
import "./App.css";

function App() {
  // State cho danh sách công việc và state cho form thêm nhiệm vụ mới
  const [tasks, setTasks] = useState([
    { title: "Học lập trình web với React", due: "Tomorrow", completed: false },
    { title: "Gửi email nộp bài tập về nhà", due: "Saturday", completed: false },
    { title: "Học từ vựng tiếng anh mỗi ngày", due: "Monday", completed: false },
    { title: "Viết tiểu luận môn Triết học", due: "Today", completed: true },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDue, setNewTaskDue] = useState("");

  // Hàm toggle để đánh dấu hoàn thành
  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Hàm xử lý chỉnh sửa nhiệm vụ
  const handleEditTask = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] = value;
    setTasks(updatedTasks);
  };

  // Hàm thêm nhiệm vụ mới
  const addTask = () => {
    if (newTaskTitle && newTaskDue) {
      setTasks([
        ...tasks,
        { title: newTaskTitle, due: newTaskDue, completed: false },
      ]);
      setNewTaskTitle(""); // Clear form fields
      setNewTaskDue("");
    } else {
      alert("Please fill in both the task title and due date.");
    }
  };

  return (
    <div className="App">
      <h1>My Work 🎯</h1>

      <div className="task-container">
        {tasks.map((task, index) => (
          <div className="task-row" key={index}>
            <div className="task-left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              {/* Input để sửa tiêu đề */}
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleEditTask(index, "title", e.target.value)}
                className={task.completed ? "completed" : ""}
              />
            </div>

            {/* Input để sửa ngày hết hạn */}
            <input
              type="text"
              value={task.due}
              onChange={(e) => handleEditTask(index, "due", e.target.value)}
              className={`task-due ${task.due.toLowerCase()}`}
            />
          </div>
        ))}
      </div>

      {/* Form để thêm nhiệm vụ mới */}
      <div className="add-task-form">
        <input
          type="text"
          placeholder="Enter new task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter due date"
          value={newTaskDue}
          onChange={(e) => setNewTaskDue(e.target.value)}
        />
        <button onClick={addTask}>Add task</button>
      </div>
    </div>
  );
}

export default App;
