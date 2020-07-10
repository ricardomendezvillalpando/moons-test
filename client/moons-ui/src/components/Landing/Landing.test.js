import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});