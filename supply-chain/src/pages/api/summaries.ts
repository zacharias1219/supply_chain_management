// src/pages/api/summary.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib2/mongoose';
import Inventory from '../../models/Inventory';
import Supplier from '../../models/Supplier';
import Route from '../../models/Route';
import Cost from '../../models/Cost';
import Risk from '../../models/Risk';
import Monitoring from '../../models/Monitoring';
import Sustainability from '../../models/Sustainability';
import DemandForecast from '../../models/DemandForecast';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const inventoryData = await Inventory.find({});
  const suppliersData = await Supplier.find({});
  const routesData = await Route.find({});
  const costsData = await Cost.find({});
  const risksData = await Risk.find({});
  const monitoringData = await Monitoring.find({});
  const sustainabilityData = await Sustainability.find({});
  const demandForecastData = await DemandForecast.find({});

  const summary = {
    inventory: {
      totalItems: inventoryData.length,
      criticalItems: inventoryData.filter(item => item.isCritical).map(item => item.name),
    },
    suppliers: {
      totalSuppliers: suppliersData.length,
      recentSupplier: suppliersData[suppliersData.length - 1]?.name || '',
    },
    routes: {
      totalRoutes: routesData.length,
      recentRoute: routesData[routesData.length - 1]?.name || '',
    },
    costs: {
      totalSavings: costsData.reduce((acc, cost) => acc + cost.savings, 0),
      recentCost: costsData[costsData.length - 1]?.description || '',
    },
    risks: {
      totalRisks: risksData.length,
      criticalRisk: risksData.find(risk => risk.isCritical)?.description || '',
    },
    monitoring: {
      totalMonitored: monitoringData.length,
      criticalStatus: monitoringData.find(status => status.isCritical)?.description || '',
    },
    sustainability: {
      totalPractices: sustainabilityData.length,
      impactfulPractice: sustainabilityData.find(practice => practice.isImpactful)?.description || '',
    },
    forecasting: {
      latestForecast: demandForecastData[demandForecastData.length - 1]?.forecast || '',
      accuracy: demandForecastData.reduce((acc, forecast) => acc + forecast.accuracy, 0) / (demandForecastData.length || 1),
    },
  };

  res.status(200).json(summary);
};

export default handler;
