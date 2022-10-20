import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateBook extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      sepractice:'',
      claim:'',
      result:'',
      researchtype:'',
      participant:'',
      journalname:'',
      authors:'',
      year:'',
      volume:'',
      number:'',
      pages:'',
      doi:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      sepractice: this.state.sepractice,
      claim: this.state.claim,
      result: this.state.result,
      researchtype: this.state.researchtype,
      participant: this.state.participant,
      journalname: this.state.journalname,
      authors: this.state.authors,
      year: this.state.year,
      volume: this.state.volume,
      number: this.state.number,
      pages: this.state.pages,
      doi: this.state.doi
    };

    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        // console.log('1');
        this.setState({
          title: '',
          sepractice:'',
          claim:'',
          result:'',
          researchtype:'',
          participant:'',
          journalname:'',
          authors:'',
          year:'',
          volume:'',
          number:'',
          pages:'',
          doi:''
        })
        // console.log('1');
        //this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        console.log(data);
        console.log("Error in CreateBook!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Home
              </Link>
              <Link to="/search" className="btn btn-outline-warning float-right">
                  Search For Article
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center"
              >Add Article</h1>
              <p className="lead text-center">
                  Submit article entry
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Article'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />



                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Authors'
                    name='authors'
                    className='form-control'
                    value={this.state.authors}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Software Engineering Practice'
                    name='sepractice'
                    className='form-control'
                    value={this.state.sepractice}
                    onChange={this.onChange}
                  />
                </div>
               
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Claim'
                    name='claim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Result of research'
                    name='result'
                    className='form-control'
                    value={this.state.result}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Research type (Quantative, qualitive, meta analysis etc)'
                    name='researchtype'
                    className='form-control'
                    value={this.state.researchtype}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Participants'
                    name='participant'
                    className='form-control'
                    value={this.state.participant}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Journal Name'
                    name='journalname'
                    className='form-control'
                    value={this.state.journalname}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Journal Year'
                    name='year'
                    className='form-control'
                    value={this.state.year}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Journal Volume'
                    name='volume'
                    className='form-control'
                    value={this.state.volume}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Journal Number'
                    name='number'
                    className='form-control'
                    value={this.state.number}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Journal Pages'
                    name='pages'
                    className='form-control'
                    value={this.state.pages}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='DOI'
                    name='doi'
                    className='form-control'
                    value={this.state.doi}
                    onChange={this.onChange}
                  />
                </div>
                
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;
