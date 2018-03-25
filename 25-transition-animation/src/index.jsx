import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './styles.css';

<AddressBar />

const Home = () => (<div className="block">Home</div>);
const About = () => (<div className="block">About</div>);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <AddressBar />
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
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
