import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthenticatedHomePage from './components/AuthenticatedHomePage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = getTokenFromStorage(); // Implement your logic to get the authentication token from storage
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const getTokenFromStorage = () => {
    // Implement your logic to retrieve the authentication token from storage (e.g., local storage, session storage)
    return localStorage.getItem('authToken');
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/authenticated-home">Authenticated Home</Link>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route
          path="/authenticated-home"
          element={isAuthenticated ? <AuthenticatedHomePage /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
