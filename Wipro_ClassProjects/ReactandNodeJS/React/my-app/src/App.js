import './App.css';
import CounterComp from './components/CounterComp';
import RoomsList from './components/RoomsList';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropApp from './components/PropApp';
import UserProfiles from './components/PropApp';
import Button from './components/PropApp';
import WelcomeMessage from './components/PropApp';
import ControlledComp from './components/ControlledComp';
import UncontrolledComp from './components/UncontrolledComp';
import ImmutableComp from './components/ImmutableComp';
import PureComp from './components/PureComp';
import ReactMemo from './components/ReactMemo';
// import ParentComponent from './components/CustomComp';
import Counter from './components/Counter';
import ChildComponent from './callbackprops/ChildComponent';
import ParentComponent from './callbackprops/ParentComponent';
import React, { useState } from 'react';
import MyComponent from './components/MyComponent';
import UseToggleApp from './renderprops/ToggleApp';
import MouseApp from './renderprops/MouseTracker';
import ModalApp from './portals/ModalApp';
import MyApp from './Books/MyApp';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Profile from './Auth/Profile';

function App() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    return(
    <div style={appStyle}>
      <Header/>            
      <main style={mainStyle}>      
        {/* <h3>Welcome to SwizzwooD..</h3> */}
        {/* <h4 id='heading'>Browse Design Ideas by Room</h4>  */}
        {/* <CounterComp/>
        <br/><br/> */}
        {/* <ControlledComp/>
        <br/><br/> */}
        {/* <UncontrolledComp/>
        <br/><br/> */}
        {/* <PureComp message="Hello, Tarun. Welcome to React!" /> */}
        {/* <br/><br/> */}
        {/* <ReactMemo message="Hii.. this is react memo"/> */}
        {/* <br/><br/> */}
        {/* <ParentComponent/> */}
        {/* <ImmutableComp/> */}
        {/* <Counter count={count} onIncrement={increment} onDecrement={decrement}/>  */}
        {/* <ChildComponent/> */}
        {/* <ParentComponent/> */}
        {/* <RoomsList/> */}
        {/* <PropApp/> */}
        {/* <div id='userprofile'>
        <h3> User Profile</h3>
        <UserProfiles name="Tarun" age={24}/>
        <UserProfiles name="Dhoni" age={40}/>
        <UserProfiles name="Raina" age={36}/>
        <UserProfiles name="Badri" age={24}/>
        </div> */}

        {/* <Button/> */}

        {/* <WelcomeMessage username="user"/> */}
        {/* <MyComponent/> */}
        {/* <MouseApp/> */}
      <br/>
      {/* <UseToggleApp/> */}
      <br/>
      <br/>
      {/* <MouseApp/> */}
      {/* <Footer/> */}
      {/* <ModalApp/> */}
      {/* <MyApp/> */}
      <Router>
        <Navbar bg="success" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{color:'white',fontWeight:'bold'}}> LMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              <Nav.Link as={Link} to="/" style={{color:'white',fontWeight:'bold'}}>Home</Nav.Link>         
              <Nav.Link as={Link} to="/register" style={{color:'white',fontWeight:'bold'}}>Register</Nav.Link>
              <Nav.Link as={Link} to="/login" style={{color:'white',fontWeight:'bold'}}>Login</Nav.Link>       
            
              
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>

        <Routes>
          <Route path="/" element={<MyApp />} />    
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>}/>
          
        </Routes>
      </Router>
      </main>
      <Footer/>
    </div>
  );
}

const appStyle={
  display:'flex',
  flexDirection:'column',
  minHeight:'100vh'
}

const mainStyle={
  flex:'1',
  padding:'20px',
  textAlign:'center'
}
export default App;