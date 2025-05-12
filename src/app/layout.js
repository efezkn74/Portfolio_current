// src/app/layout.js
'use client';

import './globals.css';
import { AuthProvider } from './auth/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
