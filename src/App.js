import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';

import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import AllReview from './Pages/AllReview';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/review' element={<AllReview></AllReview>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
