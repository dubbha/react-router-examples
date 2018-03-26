import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const Home = () => (<div className="block">Home</div>);
const About = () => (<div className="block">About</div>);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AddressBar />
          <div className="container">
            <nav>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </nav>
            <Route
              render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={5000}>
                      <Switch location={location}>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
