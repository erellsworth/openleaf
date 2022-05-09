import { BaseInterface, BaseQuery } from "./Base.interface";

export interface SubmissionOptions {
    type: string;
    length: {
        display: string;
        min: number;
        max: number;
    };
    pay: string;
}

export interface MarketInterface extends BaseInterface {
    name: string;
    description?: string;
    website: string;
    guidelines?: string;
    submissionOptions: SubmissionOptions[];
    stats: any;
    isPro: boolean;
    isPaying: boolean;
    reprints: boolean;
    multipleSubs: boolean;
    simultaneousSubs: boolean;
}

export interface MarketQuery extends BaseQuery {

}