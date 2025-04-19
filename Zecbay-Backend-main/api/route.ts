import { NowRequest, NowResponse } from '@vercel/node'
import { db } from './lib/db'

export default async function handler(req: NowRequest, res: NowResponse) {
  if (req.method === 'GET') {
    try {
      const auctions = await db.getAuctions()
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json({ auctions })
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch auctions' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
