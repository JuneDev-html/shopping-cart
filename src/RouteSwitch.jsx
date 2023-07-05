import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';

export const RouteSwitch = () => {
  return (
    <HashRouter basename='/shopping-cart'>
      <App />
    </HashRouter>
  );
};
