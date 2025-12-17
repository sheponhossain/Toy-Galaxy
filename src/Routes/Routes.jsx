import React, { Children, createContext } from 'react';

const AuthContext = createContext();

const Routes = () => {
  const authValue = {
    // Add authentication-related values and functions here
  };

  return <AuthContext value={authValue}>{Children}</AuthContext>;
};

export default Routes;
