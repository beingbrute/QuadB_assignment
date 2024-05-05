// Import action types from the actions file
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actions";

// Define the initial state for the Redux store
const initialState = {
  tasks: [], // Array to store the tasks
};

// Reducer function to update the state based on dispatched actions
const reducer = (state = initialState, action) => {
  switch (action.type) { // Switch statement to handle different action types
    case ADD_TASK: // Action type to add a new task
      return {
        ...state, // Spread the current state
        tasks: [...state.tasks, action.payload], // Add the new task to the tasks array
      };
    case DELETE_TASK: // Action type to delete a task
      return {
        ...state, // Spread the current state
        tasks: state.tasks.filter((task) => task.id !== action.payload), // Remove the task with the specified ID from the tasks array
      };
    case TOGGLE_TASK: // Action type to toggle the completed state of a task
      return {
        ...state, // Spread the current state
        tasks: state.tasks.map((task) => // Map over the tasks array
          task.id === action.payload // Check if the ID of the current task matches the ID in the action payload
            ? { ...task, completed: !task.completed } // If matched, toggle the completed state of the task
            : task // Otherwise, return the task unchanged
        ),
      };
    default: // Default case for handling unknown action types
      return state; // Return the current state unchanged
  }
};

export default reducer; // Export the reducer function
