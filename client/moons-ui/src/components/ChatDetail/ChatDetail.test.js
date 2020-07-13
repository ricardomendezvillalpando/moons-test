import React from 'react';
import ReactDOM from 'react-dom';
import ChatDetail from './ChatDetail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});