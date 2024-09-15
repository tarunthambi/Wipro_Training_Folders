import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import ErrorBoundary from './NodeJSAPI/MySQLAPI/components/Item/ErrorBoundary';
import Items from './NodeJSAPI/MySQLAPI/components/Item/Items';
import AddItem from './NodeJSAPI/MySQLAPI/components/Item/AddItem';
import ItemDetails from './NodeJSAPI/MySQLAPI/components/Item/ItemDetails';
import UpdateItem from './NodeJSAPI/MySQLAPI/components/Item/UpdateItem';
// import ErrorBoundary from './MongoDBAPI/components/Item/ErrorBoundary';
// import Items from './MongoDBAPI/components/Item/Items';
// import AddItem from './MongoDBAPI/components/Item/AddItem';
// import ItemDetails from './MongoDBAPI/components/Item/ItemDetails';
// import UpdateItem from './MongoDBAPI/components/Item/UpdateItem';
import CustomerApp from './DotnetWEBAPI/SQLCustomerAPI/CustomerApp';

function App() {
  return ( 

   
  <ErrorBoundary>
   <Router>   
      <div>
      <nav className='nav-list'>
        <ul>
          <li><Link to ="/">Home</Link></li>        
          <li><Link to="/add-item">Add Item</Link></li>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Items/>}/>
        <Route path="/items" element={<Items/>}/>
        <Route path="/add-item" element={<AddItem/>}/>
        <Route path="/api/items/:id" element={<ItemDetails/>}/>
        <Route path="/update-item" element={<UpdateItem/>}/>
        <Route path="/update-item/:id" element={<UpdateItem/>}/>
      </Routes>
    </div>
   </Router>
   {/* <CustomerApp/> */}
   </ErrorBoundary>
  );
}

export default App;