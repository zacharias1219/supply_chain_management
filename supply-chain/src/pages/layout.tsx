import { ReactNode } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Card } from '../components/ui/card'; // Update path if necessary

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="w-full bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Supply Chain Optimization Tool</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/inventory-management">
                <span className="text-white hover:underline">Inventory</span>
              </Link>
            </li>
            <li>
              <Link href="/supplier-management">
                <span className="text-white hover:underline">Suppliers</span>
              </Link>
            </li>
            <li>
              <Link href="/route-optimization">
                <span className="text-white hover:underline">Route</span>
              </Link>
            </li>
            <li>
              <Link href="/cost-optimization">
                <span className="text-white hover:underline">Costs</span>
              </Link>
            </li>
            <li>
              <Link href="/risk-management">
                <span className="text-white hover:underline">Risk</span>
              </Link>
            </li>
            <li>
              <Link href="/real-time-monitoring">
                <span className="text-white hover:underline">Monitoring</span>
              </Link>
            </li>
            <li>
              <Link href="/sustainability-tracking">
                <span className="text-white hover:underline">Sustainability</span>
              </Link>
            </li>
            <li>
              <Link href="/demand-forecasting">
                <span className="text-white hover:underline">Demand</span>
              </Link>
            </li>
          </ul>
        </nav>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main className="flex-1 w-full p-4">
        <Card className="max-w-4xl mx-auto p-6">
          {children}
        </Card>
      </main>
      <footer className="w-full bg-green-600 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Supply Chain Optimization Tool by Zacharias
      </footer>
    </div>
  );
};

export default Layout;
