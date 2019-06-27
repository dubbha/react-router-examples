import React from 'react';

import WithRouter from './WithRouter.jsx';

const EvenDeeper = ({ match }) => (
  <div>
    <h4>Even Deeper [match set? { match ? 'Yes' : 'No'}]</h4>
    <WithRouter />
  </div>
);

export default EvenDeeper;
