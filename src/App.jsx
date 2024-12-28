import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home logout={logout} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
