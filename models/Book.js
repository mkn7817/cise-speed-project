// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  sepractice: {
    type: String,
    required: true
  },
  claim: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  },
  researchtype: {
    type: String,
    required: true
  },
  participant: {
    type: String,
    required: true
  },
  journalname: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  volume: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  pages: {
    type: String,
    required: true
  },
  doi: {
    type: String,
    required: true
  }
});

module.exports = Book = mongoose.model('book', BookSchema);

/*
,
  isbn: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
*/