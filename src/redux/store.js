// Import the createStore function from Redux
import { createStore } from 'redux';
// Import the reducer function from the reducers file
import reducer from './reducers';

// Create the Redux store by passing the reducer function to createStore
const store = createStore(reducer);

// Export the store to make it accessible to other parts of the application
export default store;
