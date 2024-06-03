import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <h1 className="text-2xl font-bold text-center">Manage Your Supply Chain Needs</h1>
      <nav className="mt-3">
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/inventory-management" className="mr-4">Inventory</Link>
        <Link href="/supplier-management" className="mr-4">Suppliers</Link>
        <Link href="/route-optimization" className="mr-4">Routes</Link>
        <Link href="/cost-optimization" className="mr-4">Costs</Link>
        <Link href="/risk-management" className="mr-4">Risks</Link>
        <Link href="/real-time-monitoring" className="mr-4">Monitoring</Link>
        <Link href="/sustainability-tracking" className="mr-4">Sustainability</Link>
        <Link href="/demand-forecasting" className="mr-4">Demand</Link>
      </nav>
    </header>
  );
};

export default Header;
