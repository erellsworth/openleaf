import { Request, Response } from "express"
import { ContentInterface, ContentQuery } from "~/interfaces/content";
import { PaginatedResults } from "~/interfaces/misc";
import { TaxonomyQuery } from "~/interfaces/taxonomy";
import { Content, Taxonomy } from "../models";
import { notFoundResponse, successResponse } from "../utils/responses";
import marketRouter from "./router";

marketRouter.get('/:slug?', async (req: Request, res: Response) => {

    let content: ContentInterface | PaginatedResults;

    const { slug } = req.params;

    if (slug) {
        content = await Content.findBySlug(slug);
    } else {

        const query: ContentQuery = {
            type: 'post',
            limit: 6,
            page: 1
        };

        content = await Content.findAll(query);
    }

    if (content) {
        successResponse(res, content);
    } else {
        notFoundResponse(res);
    }

});

export default marketRouter;