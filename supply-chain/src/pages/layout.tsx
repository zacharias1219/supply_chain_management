// src/pages/layout.tsx
import { ReactNode } from 'react';
import { Card } from '../components/ui/card'; // Update path if necessary

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light-green">
      <header className="w-full bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Supply Chain Optimization Tool</h1>
      </header>
      <main className="flex-1 w-full p-4">
        <Card className="max-w-4xl mx-auto p-6">
          {children}
        </Card>
      </main>
      <footer className="w-full bg-green-600 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Supply Chain Optimization Tool
      </footer>
    </div>
  );
};

export default Layout;