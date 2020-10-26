import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function name(user){
  return user.first+" "+user.last;
}

const user = {
  first:'Nurul',
  last:'Hassan'
};

const element = (
<h1>Hello,Mr.{name(user)}</h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

reportWebVitals();
