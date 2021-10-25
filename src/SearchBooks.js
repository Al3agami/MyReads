import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import { search } from './BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
    static propTypes = {
        currBooks: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }
    state = {
        query:'',
        result:[]
    };

    onQueryChanged = (e) => {
        this.setState({ query: e.target.value.trim() });
        if (e.target.value.trim().length > 2){
            this.handleSearch();
        }else{
            this.setState({result:[]});
        }
    };

    handleSearch = () => {
        search(this.state.query).then(books => {
            const curr = this.props.currBooks.filter(b => b.title.includes(this.state.query));
            (books != null && books.length > 0) ? 
                this.setState({
                    result: books.filter(b =>
                        b.authors != null
                        && b.authors.length > 0
                        && b.imageLinks != null
                        && b.imageLinks.smallThumbnail != null
                        && b.imageLinks.smallThumbnail !== ''
                        && !this.props.currBooks.some(cb => cb.id === b.id)
                    ).concat(...curr)
                }) :
                this.setState({ result: [...curr] });
            }
        );
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            onChange={this.onQueryChanged}
                            value={this.state.query}
                            type="text"
                            placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.result.length === 0 && this.state.query.length > 2 ?
                        <h4 className="no-match-found">No Books Match Your Query</h4> :
                        (
                            <ol className="books-grid">
                                {this.state.result.map(book => (
                                    <Book
                                        key={book.id}
                                        book={book}
                                        onShelfChange={this.props.onShelfChange} />
                                    )
                                )}
                            </ol>
                        )}
                    
                </div>
            </div>
        );
    }
}

export default SearchBooks;