import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const auctions = [
    { id: 1, title: 'Auction A', bids: 10 },
    { id: 2, title: 'Auction B', bids: 5 }
  ];

  res.status(200).json(auctions);
}
