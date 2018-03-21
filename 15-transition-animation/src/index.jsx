import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './styles.css';

const Home = () => (<div>Home</div>);
const About = () => (<div>About</div>);

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
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
