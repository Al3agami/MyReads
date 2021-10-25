import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

const Shelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book => (
                            <Book
                                key={book.id}
                                book={book}
                                onShelfChange={props.onShelfChange}/>
                        )
                    )}
                </ol>
            </div>
        </div>

    );
}

Shelf.propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}


export default Shelf;