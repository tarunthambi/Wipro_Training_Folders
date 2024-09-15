import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Link, Routes,Route, Navigate } from 'react-router-dom';
import Home from './layouts/Home';
import AboutUs from './layouts/AboutUs';
import ConatctUs from './layouts/ContactUs';
import Dashboard from './layouts/Dashboard';
import Profile from './layouts/Profile';
import Settings from './layouts/Settings';
import Statistics from './layouts/Statistics';
import ErrorBoundary from './layouts/ErrorBoundary';
import TransitionLayout from './transitions/TransitionLayout';

function App() {
  return (
    <ErrorBoundary>
    <Router>
       <nav style={{display:'flex',listStyle:'none',padding:'15px',gap:'5px'}}>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>          
          <Link to="/dashboard">Dashboard</Link>
          <Link to ="/old-path">Old Path</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ConatctUs/>}/>
          {/* Nested Routes*/}
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="statistics" element={<Statistics/>}/>
          </Route>

        <Route path="/old-path" element={<Navigate to ="/new-path" replace/>}/>
        <Route path="/new-path" element={<div><h4>New Path Content</h4></div>}/>

        </Routes> 
      </Router>

      <TransitionLayout/>
      </ErrorBoundary>
  );
}

export default App;