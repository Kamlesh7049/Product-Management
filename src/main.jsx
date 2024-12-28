import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./CSS/web.css";
import AuthProvider from './context/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
