import { BaseInterface, BaseQuery } from "./Base.interface";

export interface SubmissionOptions {
    type: string;
    length: {
        display: string;
        min: number;
        max: number;
        unit: string;
    };
    pay: {
        advance: boolean;
        royalties: boolean;
        display: string;
    };
}

export interface MarketInterface extends BaseInterface {
    name: string;
    description?: string;
    website: string;
    guidelines?: string;
    submissionOptions: SubmissionOptions[];
    stats: any;
    isPaying: boolean;
    reprints: boolean;
    multipleSubs: boolean;
    simultaneousSubs: boolean;
}

export interface MarketQuery extends BaseQuery {

}