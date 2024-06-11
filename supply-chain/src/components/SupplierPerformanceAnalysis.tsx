import React, { useEffect, useState } from 'react';
import { SupplierPerformance } from '../types/SupplierPerformance';
import { Card } from './ui/card';

const SupplierPerformanceAnalysis = () => {
  const [analysis, setAnalysis] = useState<SupplierPerformance[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/suppliers/performance-analysis');
        const data = await res.json();
        console.log(data); // Add this line to inspect the data
        if (Array.isArray(data)) {
          setAnalysis(data);
        } else {
          console.error('Expected an array but got', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Supplier Performance Analysis</h2>
      <ul>
        {analysis.map((supplier, index) => (
          <li key={index}>
            {supplier.name}: On-Time Delivery - {supplier.onTimeDeliveryRate}%, Quality - {supplier.qualityScore}, Cost Effectiveness - {supplier.costEffectiveness}, Overall Performance - {supplier.overallPerformance}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SupplierPerformanceAnalysis;
