import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Axios from 'axios'
Axios.defaults.baseURL = "https://mitsubishi.trinix.id/api/frontend/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);