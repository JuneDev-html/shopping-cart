import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

export const RouteSwitch = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
