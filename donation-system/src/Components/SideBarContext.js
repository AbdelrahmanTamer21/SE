// SideBarContext.js
import React, { createContext, useState, useEffect } from 'react';

const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedIsOpen = localStorage.getItem('isOpen');

    if (storedIsOpen) {
      setIsOpen(storedIsOpen);
    }
  }, []);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    
    // Store user data in localStorage
    localStorage.setItem('isOpen', !isOpen);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SideBarProvider };
