import React from 'react';

interface Layout {
  children: React.ReactNode;
}

const Layout = ({ children }: Layout) => (
  <main className="w-full h-full min-h-screen bg-stone-200 flex flex-col items-center p-2 sm:p-6 gap-y-2">
    {children}
  </main>
);

export default Layout;
