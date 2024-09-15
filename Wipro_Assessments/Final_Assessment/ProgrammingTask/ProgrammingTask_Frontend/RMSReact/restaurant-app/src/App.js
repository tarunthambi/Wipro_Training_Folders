import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuPage from './Pages/MenuPage';
import OrderPage from './Pages/OrderPage';
import LoginForm from './Auth/LoginForm';
import SignupForm from './Auth/SignupForm';
import HomePage from './Pages/HomePage';
import CustomNavbar from './Navbars/Navbar';
import Footer from './Navbars/Footer';
import ReviewPages from './Pages/ReviewPage';
import ProfilePage from './Pages/ProfilePage';

function App() {
  return (
    <div  className="App">
    <Router>
      <CustomNavbar/>
    <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/login" element={<LoginForm/>} /> 
            <Route path="/signup" element={<SignupForm  />} />
            <Route path="/menu" element={<MenuPage/>} />
            <Route path="/order" element={<OrderPage/>} />
            <Route path="/reviewpage" element={<ReviewPages/>} />
            <Route path="/profilepage" element={<ProfilePage/>} />
    </Routes>
    <Footer/>
</Router>
</div>
  );
}

export default App;
