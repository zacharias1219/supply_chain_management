import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib2/mongodb';
import { Db, MongoClient } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let client: MongoClient;
  let db: Db;

  try {
    client = await clientPromise; // Await the promise to get the MongoClient instance
    db = client.db('myFirstDatabase'); // Replace with your database name
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    return res.status(500).json({ error: 'Failed to connect to the database' });
  }

  if (req.method === 'GET') {
    try {
      // Example summary data fetching
      const inventoryCount = await db.collection('inventory').countDocuments();
      const criticalItems = await db.collection('inventory').find({ quantity: { $lt: 10 } }).toArray();

      const summaryData = {
        inventory: {
          totalItems: inventoryCount,
          criticalItems: criticalItems.map(item => item.name),
        },
        // Add similar summary fetching for other collections
      };

      res.status(200).json(summaryData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default handler;
