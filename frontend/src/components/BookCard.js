import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;
//<img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
    return(
        <div className="card-container">
            <img src="https://drupal.nypl.org/sites-drupal/default/files/blogs/sJ3CT4V.gif" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )
};

export default BookCard;