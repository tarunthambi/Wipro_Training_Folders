import './App.css';
import { useState } from 'react';
import Toggle from './Task1/Toggle';
import ColorPicker from './Task2/ColorPicker';
import TodoList from './Task3/ToDoList';
import Stopwatch from './Task4/Stopwatch';
import Rating from './Task5/Rating';

function App() {

  //task-1
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (state) => {
      setToggleState(state);
      console.log('Toggle is now:', state ? 'On' : 'Off');
  };

  //task-2

  const handleColorSelect = (color) => {
      console.log(`Selected Color: ${color}`);
  };

  // task-3
  const [tasks, setTasks] = useState([]);

  const handleTasksUpdate = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  // task-4
  const [time, setTime] = useState(0);

  const handleTimeUpdate = (newTime) => {
    setTime(newTime);
  };

  // task-5
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="App">
      {/* task-1 */}
       <h3>Toggle Button</h3>
       <Toggle initialState={toggleState} onToggle={handleToggle} />
      {/* task-2 */}
      <br/>
      <br/>
      <h3>Color Picker</h3>
        <div className="App container my-6">
            <ColorPicker onColorSelect={handleColorSelect} />
        </div>
      {/* task-3 */}
      <br/>
      <br/>
      <h3>Todo List</h3>
      <TodoList onTasksUpdate={handleTasksUpdate} />
      {/* task-4 */}
      <br/>
      <br/>
      <h2>Stopwatch</h2>
      <Stopwatch initialTime={0} onTimeUpdate={handleTimeUpdate} />
      <br/>
      <br/>
      <div className="container text-center mt-5">
        <h2>Rate the Movie:</h2>
        <Rating initialRating={selectedRating} onRatingChange={handleRatingChange} isLocked={false} /><br/>
        <h4><b>Your rating: {selectedRating}</b></h4>
      </div>
      <br/>
      <br/>
    </div>

  );
}

export default App;
