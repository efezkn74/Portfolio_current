'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('isLoggedIn') === 'true';
    const lastActivity = localStorage.getItem('lastActivity');
    const expired = lastActivity && (Date.now() - lastActivity > 15 * 60 * 1000);
    if (stored && !expired) setIsLoggedIn(true);
    else handleLogout(false);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const resetTimer = () => {
      if (isLoggedIn) {
        localStorage.setItem('lastActivity', Date.now().toString());
      }
    };
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('lastActivity', Date.now().toString());
  };

  const handleLogout = (showAlert = true) => {
    if (showAlert) alert('Du wurdest automatisch ausgeloggt.');
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('lastActivity');
  };

  if (!isHydrated) return null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
