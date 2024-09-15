import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import TaskDetails from './components/TaskDetails';
import CreateEditTask from './components/CreateEditTask';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/task/create" element={<CreateEditTask />} />
          <Route path="/task/edit/:id" element={<CreateEditTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
