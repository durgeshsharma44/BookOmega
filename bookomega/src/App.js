import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Books from './components/Books';
import Sell from './components/sell';
function App() {
  return (
  <Router>
   <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
     
      <Route exact path='/sell-book' element={<Sell/>}/>
      <Route exact path='/createuser' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/jee' element={<Books subject="JEE"/>}/>
      <Route exact path='/neet' element={<Books subject="NEET"/>}/>
      <Route exact path='/ssc' element={<Books subject="SSC"/>}/>
      <Route exact path='/upsc' element={<Books subject="UPSC"/>}/>

    </Routes>
  </Router>
  );
}

export default App;
