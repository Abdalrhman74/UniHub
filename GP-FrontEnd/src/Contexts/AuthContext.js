import React, { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(!!sessionStorage.getItem('token'));
  const [userRole, setUserRole] = useState(sessionStorage.getItem('userType'));

  return (
    <authContext.Provider value={{ userIsLoggedIn, setUserIsLoggedIn, userRole, setUserRole }}>
      {children}
    </authContext.Provider>
  );
}
