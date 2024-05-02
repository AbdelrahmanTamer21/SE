// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [username,setUsername] = useState(null);
  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    
    if (storedUserRole && storedIsLoggedIn && storedUsername) {
      setUserRole(storedUserRole);
      setIsLoggedIn(storedIsLoggedIn);
      setUsername(storedUsername);
    }
  }, []);

  // Function to update user role and login status
  const updateUser = (role, loggedIn,username) => {
    setUserRole(role);
    setIsLoggedIn(loggedIn);
    setUsername(username);
    
    // Store user data in localStorage
    localStorage.setItem('userRole', role);
    localStorage.setItem('isLoggedIn', loggedIn);
    localStorage.setItem('username', username);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userRole, updateUser,username }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
