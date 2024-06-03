// src/pages/api/summary.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/mongoose';
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

  const inventorySummary = await Inventory.aggregate([
    { $group: { _id: null, totalItems: { $sum: "$quantity" }, criticalItems: { $push: "$name" } } },
  ]);

  const supplierSummary = await Supplier.aggregate([
    { $group: { _id: null, totalSuppliers: { $sum: 1 }, recentSupplier: { $last: "$name" } } },
  ]);

  const routeSummary = await Route.aggregate([
    { $group: { _id: null, totalRoutes: { $sum: 1 }, recentRoute: { $last: "$description" } } },
  ]);

  const costSummary = await Cost.aggregate([
    { $group: { _id: null, totalSavings: { $sum: "$amount" }, recentCost: { $last: "$description" } } },
  ]);

  const riskSummary = await Risk.aggregate([
    { $group: { _id: null, totalRisks: { $sum: 1 }, criticalRisk: { $last: "$description" } } },
  ]);

  const monitoringSummary = await Monitoring.aggregate([
    { $group: { _id: null, totalMonitored: { $sum: 1 }, criticalStatus: { $last: "$status" } } },
  ]);

  const sustainabilitySummary = await Sustainability.aggregate([
    { $group: { _id: null, totalPractices: { $sum: 1 }, impactfulPractice: { $last: "$description" } } },
  ]);

  const forecastingSummary = await DemandForecast.aggregate([
    { $group: { _id: null, latestForecast: { $last: "$forecast" }, accuracy: { $avg: "$accuracy" } } },
  ]);

  res.status(200).json({
    inventory: inventorySummary[0] || { totalItems: 0, criticalItems: [] },
    suppliers: supplierSummary[0] || { totalSuppliers: 0, recentSupplier: '' },
    routes: routeSummary[0] || { totalRoutes: 0, recentRoute: '' },
    costs: costSummary[0] || { totalSavings: 0, recentCost: '' },
    risks: riskSummary[0] || { totalRisks: 0, criticalRisk: '' },
    monitoring: monitoringSummary[0] || { totalMonitored: 0, criticalStatus: '' },
    sustainability: sustainabilitySummary[0] || { totalPractices: 0, impactfulPractice: '' },
    forecasting: forecastingSummary[0] || { latestForecast: '', accuracy: 0 },
  });
};

export default handler;
