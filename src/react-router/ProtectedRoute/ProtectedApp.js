import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginButton from './LoginButton';
import ProtectedRoute from './ProtectedRoute';
import {Home, PrivatePage, NestedPage, PublicPage} from './Home';

const ProtectedApp = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/public">Public Page</Link> |{" "}
            <Link to="/private">Private Page</Link> |{" "}
            <Link to="/nested">Nested Page</Link>
          </nav>
          <LoginButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="public" element={<PublicPage />} />
            <Route path="private" element={
              <ProtectedRoute>
                <PrivatePage />
              </ProtectedRoute>
            } />
            <Route path="nested" element={<NestedPage />}>
              <Route index element={<div>Default Nested</div>} />
              <Route path="sub" element={<div>Sub Nested</div>} />
              <Route path="protected" element={
                <ProtectedRoute>
                  <div>Protected Nested</div>
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default ProtectedApp;
