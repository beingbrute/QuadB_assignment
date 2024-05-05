
import React from 'react'; // Import the React library
import TaskInput from './Components/TaskInput'; // Import the TaskInput component
import TaskList from './Components/TaskList'; // Import the TaskList component
import { Provider } from 'react-redux'; // Import Provider from React-Redux
import store from './redux/store'; // Import the Redux store
import './styles.css'; // Import the global CSS file for styling

function App() {
  return (
    <Provider store={store}> {/* Provide the Redux store to the application */}
      <div className="container"> {/* Container for the entire application */}
        <h1>ToDo List</h1> {/* Heading for the application */}
        <TaskInput /> {/* Render the TaskInput component */}
        <TaskList /> {/* Render the TaskList component */}
      </div>
    </Provider>
  );
}

export default App; // Export the App component
