import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Review from './Pages/Review/Review';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<About></About>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
