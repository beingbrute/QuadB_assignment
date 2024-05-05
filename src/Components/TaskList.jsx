import React from 'react'; // Import the React library
import { useSelector, useDispatch } from 'react-redux'; // Import the useSelector and useDispatch hooks from React-Redux
import { deleteTask, toggleTask } from '../redux/actions'; // Import action creators from the actions file
import './TaskList.css'; // Import the CSS file for styling

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Get the tasks array from the Redux store
  const dispatch = useDispatch(); // Create a dispatch function to dispatch actions to the Redux store

  // Function to handle deleting a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch the deleteTask action with the taskId
  };

  // Function to handle toggling the completed state of a task
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId)); // Dispatch the toggleTask action with the taskId
  };

  // Render the list of tasks
  return (
    <ul>
      {tasks.map((task) => ( // Map over the tasks array and render each task as a list item
        <li key={task.id} className={task.completed ? 'completed' : ''}> {/* Apply 'completed' class if task is completed */}
          <input
            type="checkbox"
            checked={task.completed} // Set the checked attribute based on the task's completed state
            onChange={() => handleToggleTask(task.id)} // Call handleToggleTask function when checkbox is changed
          />
          <span>{task.text}</span> {/* Render the text of the task */}
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button> {/* Call handleDeleteTask function when button is clicked */}
        </li>
      ))}
    </ul>
  );
};

export default TaskList; // Export the TaskList component
