import React, { useState, useContext } from 'react';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
