import React from 'react';

import EvenDeeper from './EvenDeeper.jsx';

const Deeper = ({ match }) => (
  <div>
    <h3>Deeper [match set? { match ? 'Yes' : 'No'}]</h3>
    <EvenDeeper />
  </div>
);

export default Deeper;
