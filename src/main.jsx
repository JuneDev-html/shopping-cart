import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouteSwitch } from './RouteSwitch.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
