import React, { Component } from 'react';
import { render } from 'react-dom';

import WithRouter from './WithRouter.jsx';

import './styles.css';

const EvenDeeper = ({ match }) => (
  <div>
    <h4>Even Deeper [match set? { match ? 'Yes' : 'No'}]</h4>
    <WithRouter />
  </div>
);

export default EvenDeeper;
