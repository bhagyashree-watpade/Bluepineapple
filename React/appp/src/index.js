import React from 'react';
import ReactDOM from 'react-dom/client';
import Onclick from './Ass1';
import Display from './Ass3';
import UseRef from './Ass4';
import UserInformation from './Ass5';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Onclick />
    <Display />
    <UseRef />
    <UserInformation />
  </React.StrictMode>
);


