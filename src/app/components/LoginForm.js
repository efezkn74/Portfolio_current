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
      setError('Falscher Benutzername oder Passwort.');
    }
  };

  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg border border-gray-300 w-full max-w-sm">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Login</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Benutzername"
          className="p-2 rounded border border-gray-300 text-black w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort"
          className="p-2 rounded border border-gray-300 text-black w-full"
        />
        <button type="submit" className="bg-[#0A1A20] px-4 py-2 rounded text-white w-full">
          Login
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
