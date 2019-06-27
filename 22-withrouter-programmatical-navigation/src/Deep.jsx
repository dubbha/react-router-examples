import React from 'react';

import Deeper from './Deeper.jsx';

const Deep = ({ match }) => (
  <div>
    <h2>Deep [match.path: {match.path}]</h2>
    <Deeper />
  </div>
);

export default Deep;
