import React from "react";
import { render } from 'react-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const AnimationExample = () => (
  <Router>
    <Route
      render={({ location }) => {
        return (
          <div style={styles.fill}>
            <Route
              exact
              path="/"
              render={() => <Redirect to='/hsl/10/90/50' />}
            />

            <AddressBar />

            <ul style={styles.nav}>
              <NavLink to="/rgb/255/0/0">Red</NavLink>
              <NavLink to="/rgb/0/128/0">Green</NavLink>
              <NavLink to="/rgb/0/0/255">Blue</NavLink>
              <NavLink to="/hsl/60/100/25">Olive</NavLink>
              <NavLink to="/hsl/16/100/66">Coral</NavLink>
              <NavLink to="/hsl/302/59/65">Orchid</NavLink>
            </ul>

            <div style={styles.content}>
              <TransitionGroup>
                {/*
                  Make sure to pass `location` to `Switch`
                  so it can match the old location as it animates out
                */}
                <CSSTransition key={location.key} classNames="fade" timeout={500}>
                  <Switch location={location}>
                    <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                    <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                    {/* Without this blank canvas route, we would get errors during
                      the initial transition from `/` to `/hsl/10/90/50`
                    */}
                    <Route exact path="/" render={() => <div></div>} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )
      }}
    />
  </Router>
);

const NavLink = props => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: "inherit" }} />
  </li>
);

const HSL = ({ match: { params } }) => (
  <div
    style={{
      ...styles.fill,
      ...styles.hsl,
      background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}
  >
    hsl({params.h}, {params.s}%, {params.l}%)
  </div>
);

const RGB = ({ match: { params } }) => (
  <div
    style={{
      ...styles.fill,
      ...styles.rgb,
      background: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}
  >
    rgb({params.r}, {params.g}, {params.b})
  </div>
);

const styles = {};

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

styles.content = {
  ...styles.fill,
  top: '60px',
  textAlign: 'center',
};

styles.nav = {
  fontFamily: 'Segoe UI',
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: '20px',
  height: '40px',
  width: '100%',
  display: 'flex',
};

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px',
};

styles.hsl = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px',
};

styles.rgb = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px',
};

render(<AnimationExample />, document.getElementById('root'));
