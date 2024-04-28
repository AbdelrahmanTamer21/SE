// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUserRole && storedIsLoggedIn) {
      setUserRole(storedUserRole);
      setIsLoggedIn(storedIsLoggedIn);
    }
  }, []);

  // Function to update user role and login status
  const updateUser = (role, loggedIn) => {
    setUserRole(role);
    setIsLoggedIn(loggedIn);

    // Store user data in localStorage
    localStorage.setItem('userRole', role);
    localStorage.setItem('isLoggedIn', loggedIn);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userRole, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
