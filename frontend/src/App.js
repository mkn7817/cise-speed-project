import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import SearchBook from './components/SearchBook.js';
//import ShowBookDetails from './components/ShowBookDetails';
//import UpdateBookInfo from './components/ShowBookList.js';

//<Route exact path='/' element={<ShowBookList/>} > </Route>
//<Route path='/edit-book/:id' element={<UpdateBookInfo/>} > </Route>
//<Route path='/show-book/:id' element={<ShowBookDetails/>} > </Route>

class App extends  React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
          <Route path='/' element={<CreateBook/>} > </Route>
          <Route exact path='/show-list' element={<ShowBookList/>} > </Route>
          <Route exact path='/search' element={<SearchBook/>} > </Route>
          <Route path='/create-book' element={<CreateBook/>} > </Route>

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;