import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet nane="Luna" animal="Dog" breed="Havanese" />
      <Pet nane="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet nane="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
