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
    const token = getTokenFromURL(); // Implement your logic to get the token from the URL
    if (token) {
      storeToken(token); // Implement your logic to store the token
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const getTokenFromURL = () => {
    // Implement your logic to retrieve the token from the URL
    // You can use the URLSearchParams API or any other method to extract the token from the URL
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('token');
  };

  const storeToken = (token) => {
    // Implement your logic to store the token in local storage or any other storage mechanism
    localStorage.setItem('authToken', token);
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
