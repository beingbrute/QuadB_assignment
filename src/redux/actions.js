// Define action types as constants
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// Action creator function to add a new task
export const addTask = (text) => ({
  type: ADD_TASK, // Action type
  payload: { // Payload containing the new task details
    id: new Date().getTime(), // Unique identifier for the task
    text, // Text of the task
    completed: false, // Initial completed state set to false
  },
});

// Action creator function to delete a task
export const deleteTask = (id) => ({
  type: DELETE_TASK, // Action type
  payload: id, // Payload containing the ID of the task to be deleted
});

// Action creator function to toggle the completed state of a task
export const toggleTask = (id) => ({
  type: TOGGLE_TASK, // Action type
  payload: id, // Payload containing the ID of the task to toggle
});
