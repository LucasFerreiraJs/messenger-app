'use client';

import { SessionProvider } from 'next-auth/react';

interface IAuthConextProps {
  children: React.ReactNode
}

export default function AuthContext({ children }: IAuthConextProps) {

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );

}


