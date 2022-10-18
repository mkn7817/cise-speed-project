import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import Homepage from './components/HomePage/HomePage.js'
import SearchArticle from './components/SearchArticle/SearchArticle.js'
import ModeratorPage from './components/ModeratorPage/ModeratorPage.js'
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
          <Route path='/' element={<Homepage/>} > </Route>
          <Route exact path='/Create-Article' element={<CreateBook/>} > </Route>
          <Route exact path='/Search' element={<SearchArticle/>} > </Route>
          <Route exact path='/Moderator' element={<ModeratorPage/>} > </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;