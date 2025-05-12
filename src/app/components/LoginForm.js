'use client';

import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

export default function LoginForm() {
  const { handleLogin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const response = await fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      handleLogin();
    } else {
      setError('Falscher Benutzername oder Passwort.  ');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Benutzername"
        className="p-2 rounded text-black w-72"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passwort"
        className="p-2 rounded text-black w-72"
      />
      <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white">
        Login
      </button>
      {error && <p className="text-red-400">{error}</p>}
    </form>
  );
}
