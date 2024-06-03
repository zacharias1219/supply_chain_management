import { useEffect, useState } from 'react';

interface SupplierPerformance {
  name: string;
  onTimeDeliveryRate: number;
  qualityScore: number;
  costEffectiveness: number;
  overallPerformance: number;
}

const SupplierPerformanceAnalysis = () => {
  const [analysis, setAnalysis] = useState<SupplierPerformance[]>([]);

  useEffect(() => {
    const fetchAnalysis = async () => {
      const res = await fetch('/api/suppliers/performance-analysis');
      const data: SupplierPerformance[] = await res.json();
      setAnalysis(data);
    };
    fetchAnalysis();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Supplier Performance Analysis</h2>
      <ul>
        {analysis.map((supplier, index) => (
          <li key={index}>
            {supplier.name}: On-Time Delivery - {supplier.onTimeDeliveryRate}%, Quality - {supplier.qualityScore}, Cost Effectiveness - {supplier.costEffectiveness}, Overall Performance - {supplier.overallPerformance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierPerformanceAnalysis;
