import React from 'react';
import { render } from 'react-dom';

import App from './App';

const title = 'Build Week React Webpack App for Language Translation App';

render(
  <App title={title} />,
  document.getElementById('root')
);

module.hot.accept();
