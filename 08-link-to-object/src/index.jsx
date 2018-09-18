import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

class About extends Component {
  constructor(props) {
    super(props);

    if (props.location && props.location.state) {
      this.state = props.location.state;
    } else {
      this.state = {};
    }

    console.log(props);
  }

  render() {    
    return (
      <div>
        <div>About</div>
        <div>You came from { this.state.fromHome ? 'Home' : 'where, my friend?' }</div>
        {/* <div>props.location.state: <pre>{JSON.stringify(this.props.location.state, null, 2)}</pre></div> */}
        {/* <div>props.location: <pre>{JSON.stringify(this.props.location, null, 2)}</pre></div> */}
        {/* <div>props: <pre>{JSON.stringify(this.props, null, 2)}</pre></div> */}
      </div>
    );
    
  }
};

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <Link to={{
          pathname: '/about',        // A string representing the path to link to
          search: '?what=company',   // A string represenation of query parameters
          hash: '#sub-section',      // A hash to put in the URL
          state: { fromHome: true }  // State to persist to the location
      }}>
        About
      </Link>
      <Route path="/about" component={About} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
