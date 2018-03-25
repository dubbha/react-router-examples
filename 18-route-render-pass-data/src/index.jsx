import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const Home = () => (<div>Home</div>);

const BooksList = ({ books, match }) => (
  <div>
    <div>props.match.path: {match.path}</div>
    <div>Books:</div>
    <ul>
      {books.map(book => (<li key={book.id}>{book.title}</li>))}
    </ul>
  </div>
);

const BooksListWithDataPassed = (props) => {
  const books = [
    { id: 1, title: 'bible'},
    { id: 2, title: 'kamasutra'},
    { id: 3, title: 'bukvar'}
  ];

  return (<BooksList {...props} books={books} />);
}

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" render={BooksListWithDataPassed}/>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
