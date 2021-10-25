# MyReads Project

This project represent a books library to manage user books. on which the user can search for a book and add a book to specific category/shelf (either Currently Reading, Want To Read or Read) also the user can change books' shelf anytime.

This project runs backend APIs to save user data to server, and run the frontend user interaction using React.js.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFYs
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── ShelfsList.js # This is the main component of all books' shelfs list, inside root.
    ├── Shelf.js # This component represent one shelf's data in ShelfsList component.
    ├── Book.js # This component represent one book inside a Shelf component.
    ├── SearchBooks.js # This is the main component search view that includes multiple Book components (one for each book result).
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods necessary for operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Frontend
The frontend of this project developed using react.js, in [`src`](src/) you can find all the component:

* [`App.js`](src/App.js)
* [`ShelfsList.js`](src/ShelfsList.js)
* [`Shelf.js`](src/Shelf.js)
* [`Book.js`](src/Book.js)
* [`SearchBooks.js`](src/SearchBooks.js)


### `App.js`
This is the root of your app. Contains static HTML right now

### `ShelfsList.js`
This is the main component of all books' shelfs list, inside root.
Takes two Props:
```js
const onShelfChange
```
Which is a function in [`App.js`](src/App.js) to apply selected change of shelf for any book

```js
const books
```
Which is an array of all books loaded from the server


### `Shelf.js`
This component represent one shelf's data in ShelfsList component.
Takes three Props:
```js
const shelfName
```
Which is a string holds the shelf title appears on the page.

```js
const books
```
Which is an array of all books of that shelf filtered in the [`ShelfsList.js`](src/ShelfsList.js) component.

```js
const onShelfChange
```
Which is same function passed from [`ShelfsList.js`](src/ShelfsList.js) component.


### `Book.js`
This component represent one book inside a Shelf component.
Takes two Props:
```js
const book
```
Which is an object represent one book data.

```js
const onShelfChange
```
Which is same function passed from [`Shelf.js`](src/Shelf.js) component.


### `SearchBooks.js`
This is the main component search view that includes multiple Book components (one for each book result).
Takes two Props:
```js
const currBooks
```
Which is an array that contains all the books of the current state of the App.

```js
const onShelfChange
```
Which is a function in [`App.js`](src/App.js) to apply selected change of shelf for any book either new book or an already exist book in the App main state.



## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
