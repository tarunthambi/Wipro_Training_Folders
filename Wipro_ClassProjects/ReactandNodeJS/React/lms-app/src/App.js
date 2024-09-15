//App.js
import logo from './logo.svg';
import './App.css';
import Home from './components/book/Home';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Books from './components/book/Books';
import AddBook from './components/book/AddBook';
import BookDetails from './components/book/BookDetails';
import UpdateBook from './components/book/UpdateBook';
import ErrorBoundary from './components/book/ErrorBoundary';

function App() {
  return (
  <ErrorBoundary>
   <Router>
    <div>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/books">Books</Link></li>
          <li><Link to="/add-book">Add Book</Link></li>
          <li><Link to="/update-book">Update Book</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/books/:id" element={<BookDetails/>}/>
        <Route path="/update-book" element={<UpdateBook/>}/>
        <Route path="/update-book/:id" element={<UpdateBook/>}/>
      </Routes>
    </div>
   </Router>
   </ErrorBoundary>
  );
}

export default App;
