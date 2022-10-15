import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class SearchBook extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {

    }
    console.log('submitted');
  }

    findArrayElementByTitle(array, title) {
    return array.find((element) => {
      return element.title;
    })
  };  


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    //generate booklist
    if(!books) {
      bookList = "there is no book record!";
      console.log('there is no book record');
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
        
      );
      console.log('book record found');
    }

    //TO DO
    let articles;
    //articles = books.map(books, k);

  const found = books.find(obj => {return obj.title = 'ds';});
  const found2 = this.findArrayElementByTitle(books, 'ds');
  console.log('Found object: '+found);
  console.log('Found object title: '+found2);
  

  const searchWord =  this.state.search;//gets search word from text input
    console.log('Search Word:'+searchWord);
    
    const test1 = this.state.books.map(function(book, k){
        console.log('test');
        return <li key={k}>Test</li>
      })
      var i = 1;
      //seach functioning
      console.log('Number of books: '+books.length);
      books.forEach(function(item){
        
        //console.log(item.title);
        if(item.title.includes(searchWord)) {
          console.log('Search: '+searchWord+' item number: '+i+' title: '+item.title);
          i++;
        }
        
      });
      /*
      //loops array of books prints titles
      books.forEach((element, index, array) => {
        console.log(element.title); // 100, 200, 300
        console.log(index); // 0, 1, 2
        console.log(array); // same myArray object 3 times
    });*/

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Article search</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div>
          <input
                    type='text'
                    placeholder='Keyword search'
                    name='search'
                    className='form-control'
                    value={this.state.search}
                    onChange={this.onChange}
                    
                  />
                  
                  
                  <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />

            <div>
                <li>{bookList}</li>
                <p>{searchWord}</p>
            
            

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default SearchBook;