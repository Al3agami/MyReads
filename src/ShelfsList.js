import React from 'react'
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

const ShelfsList = (props) => {

    const Shelfs = [
        {
            title: "Currently Reading",
            id: "currentlyReading"
        },
        {
            title: "Want To Read",
            id: "wantToRead"
        },
        {
            title: "Read",
            id: "read"
        }
    ];

    return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Shelfs.map(shelf => (
                            <Shelf
                                key={shelf.id}
                                shelfName={shelf.title}
                                onShelfChange={props.onShelfChange}
                                books={props.books.filter(b => b.shelf === shelf.id)}
                            />
                        ))}
                    </div>
                </div>
                <Link to="/search" className="open-search">
                    <button>Add a book</button>
                </Link>
            </div>
        );


}

ShelfsList.propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default ShelfsList;