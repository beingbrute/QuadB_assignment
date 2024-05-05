import React, { useState } from 'react'; // Import React and useState hook
import { useDispatch } from 'react-redux'; // Import useDispatch hook from React-Redux
import { addTask } from '../redux/actions'; // Import addTask action creator
import './TaskInput.css'; // Import CSS file for TaskInput styling

const TaskInput = () => {
  const [task, setTask] = useState(''); // State variable to store input value
  const dispatch = useDispatch(); // Create a dispatch function to dispatch actions to the Redux store

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (task.trim() !== '') { // Check if the task input is not empty
      dispatch(addTask(task)); // Dispatch the addTask action with the task text
      setTask(''); // Clear the task input
    }
  };

  // Function to handle pressing Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { // Check if the pressed key is Enter
      handleAddTask(); // Call handleAddTask function
    }
  };

  // Render the task input field and button
  return (
    <div className="task-input-container"> {/* Container for the task input */}
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Update the task state with input value
        onKeyPress={handleKeyPress} // Call handleKeyPress function on key press
        className="task-input" // Apply task-input class for styling
      />
      <button onClick={handleAddTask} className="add-button"> {/* Button to add a new task */}
        Add Task
      </button>
    </div>
  );
};

export default TaskInput; // Export the TaskInput component
