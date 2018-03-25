import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => (<h1>Home</h1>);

const UserMenu = () => (<h1>User Menu</h1>);
const UserContent = () => (<h1>User Content</h1>);

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <Route path="/user" component={UserMenu} />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={UserContent} />
      </main>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
