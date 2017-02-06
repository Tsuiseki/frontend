import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './Bootstrap';

const render = (Component) => {
  ReactDOM.render(<Component/>, document.getElementById('root'));
};

render(Bootstrap);
