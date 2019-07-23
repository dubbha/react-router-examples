import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import AddressBar from '../../common/AddressBar';
import '../../common/styles.css';

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
    <AddressBar />
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/books" render={BooksListWithDataPassed}/>
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
