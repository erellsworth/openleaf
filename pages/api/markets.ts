import type { NextApiRequest, NextApiResponse } from 'next';
import { Market } from '../../models/Market';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const MarketsApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const markets = await Market.findAll();

    res.status(200).json({ markets });
}

export default MarketsApiHandler;
