import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import TaskDetailPage from './pages/TaskDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createTask" element={<CreateTaskPage />} />
          <Route path="/editTask/:id" element={<EditTaskPage />} />
          <Route path="/displayTask/:id" element={<TaskDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
