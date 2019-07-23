import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AddressBar from '../../common/AddressBar';
import './styles.css';

const Home = () => (<div className="block">Home</div>);
const About = () => (<div className="block">About</div>);

const App = () => (
  <Router>
    <AddressBar />
    <div className="container">
      <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </nav>
      <Route
        render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
        )}
      />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
