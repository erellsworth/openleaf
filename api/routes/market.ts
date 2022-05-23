import { Request, Response } from "express"
import { MarketInterface, MarketQuery, MarketResponse } from "~/interfaces/Market.interface";
import { PaginatedResults } from "~/interfaces/Misc.interface";
import { Market } from "../models";
import { notFoundResponse, successResponse } from "../utils/responses";
import marketRouter from "./router";

marketRouter.get('/markets/:slug?', async (req: Request, res: Response) => {

    let results: MarketResponse;

    const { slug } = req.params;

    if (slug) {
        results = await Market.findBySlug(slug);
    } else {

        const query: MarketQuery = {
            limit: 5,
            page: 1
        };

        results = await Market.findAll(query);
    }

    if (results) {
        successResponse<MarketResponse>(res, results);
    } else {
        notFoundResponse(res);
    }

});

export default marketRouter;