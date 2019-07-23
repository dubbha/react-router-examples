import React from "react";
import { render } from 'react-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

import AddressBar from '../../common/AddressBar';
import './styles.css';

const AnimationExample = () => (
  <Router>
    <Route
      render={({ location }) => {
        return (
          <>
            <AddressBar />

            <nav>
              <NavItem to="/rgb/255/0/0">Red</NavItem>
              <NavItem to="/rgb/0/128/0">Green</NavItem>
              <NavItem to="/rgb/0/0/255">Blue</NavItem>
              <NavItem to="/hsl/60/100/25">Olive</NavItem>
              <NavItem to="/hsl/16/100/66">Coral</NavItem>
              <NavItem to="/hsl/302/59/65">Orchid</NavItem>
            </nav>

            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <Switch location={location}>
                  <Route path="/:model/:v1/:v2/:v3" component={ColorField} />
                  <Redirect to='/rgb/255/0/0' />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        )
      }}
    />
  </Router>
);

const getColor = (model, v1, v2, v3) => {
  const p = model === 'hsl' ? '%' : '';
  return `${model}(${v1}, ${v2}${p}, ${v3}${p})`
}

const NavItem = (props) => {
  const [, model, v1, v2, v3] = props.to.split('/');
  const backgroundColor = getColor(model, v1, v2, v3);

  return (
    <NavLink
      {...props}
      activeStyle={{ backgroundColor }}
    />
  );
}

const ColorField = ({ match: { params } }) => {
  const { model, v1, v2, v3 } = params;
  const backgroundColor = getColor(model, v1, v2, v3);

  return (
    <color-field style={{ backgroundColor }}>
      {backgroundColor}
    </color-field>
  )
}

render(<AnimationExample />, document.getElementById('root'));
