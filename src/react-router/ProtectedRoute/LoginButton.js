import React from 'react';
import { useAuth } from './AuthContext';

const LoginButton = () => {
    const { isLoggedIn, setLoggedIn } = useAuth();

    return (
        <button onClick={() => setLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
    );
};

export default LoginButton;
