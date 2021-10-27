import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ShelfsList from './ShelfsList';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Books: []
    }
  }

  componentDidMount = () =>{
    this.getAllBooks();
  }

  
  getAllBooks = () => {
    BooksAPI.getAll().then(Books => {
      this.setState({ Books });
    });
  }

  handleShelfChange = (book, shelfId) => {
    const curr = this.state.Books;
    if (shelfId === 'none') {
      const updatedBooks = curr.filter(b => b.id !== book.id);
      this.setState({ Books: updatedBooks });
    } else if (!curr.find(b => b.id === book.id)) {
      //new book
      book.shelf = shelfId;
      this.setState({ Books: [...curr, book] });
    }
    this.updateBook(book, shelfId);
  }

  updateBook = (book, shelfId) => {
    BooksAPI.update(book, shelfId).then(res => {
      const curr = this.state.Books;
      Object.keys(res).forEach(key => {
        res[key].forEach(bId => {
          curr.find(b => b.id === bId).shelf = key;
        });
      });
      this.setState({ Books: curr});
    });
  }
  
  //Less code lines, but higher execution time (less performance):
  legacyUpdateBook = (book, shelfId) => {
    BooksAPI.update(book, shelfId).then(res => {
      this.getAllBooks();
    });
  }


  render() {
    return (
      <div className="app">
        <Route
          exact path="/search"
          render={({history}) =>
            <SearchBooks
              currBooks={this.state.Books}
              onShelfChange={this.handleShelfChange}
            />
          }
        />
        <Route
          exact path="/"
          render={() =>
            <ShelfsList
              books={this.state.Books}
              onShelfChange={this.handleShelfChange}
            />
          }
        />
      </div>
    )
  }
}

export default BooksApp;