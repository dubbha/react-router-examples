import React, { Component } from 'react';
import { render } from 'react-dom';

import EvenDeeper from './EvenDeeper.jsx';

import './styles.css';

const Deeper = ({ match }) => (
  <div>
    <h3>Deeper [match set? { match ? 'Yes' : 'No'}]</h3>
    <EvenDeeper />
  </div>
);

export default Deeper;
