import React from 'react';

import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Signup from './components/Pages/Signup/signup';
import Login from './components/Pages/Login/Login';
import AddBooks from './components/AddBooks/AddBooks';
import BooksList from './components/BooksList/BooksList';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/booklist" element={<BooksList />}></Route>
          <Route path="/addbook" element={<AddBooks />}></Route>
        </Routes>

      </BrowserRouter>
     

    </div>
  );
}

export default App;
