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
function App() {
  return (
  <Router>
   <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/createuser' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/jee' element={<Books subject="Jee"/>}/>
      <Route exact path='/neet' element={<Books subject="neet"/>}/>
      <Route exact path='/ssc' element={<Books subject="ssc"/>}/>
      <Route exact path='/upsc' element={<Books subject="upsc"/>}/>

    </Routes>
  </Router>
  );
}

export default App;
