import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyled from './assets/Styles/GlobalStyled';
import App from './main/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App/>
  </React.StrictMode>
);