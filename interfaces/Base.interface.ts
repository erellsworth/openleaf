export interface BaseInterface {
    id: number;
    createdAt: string;
    updatedAt: string;
    slug: string;
}

export interface BaseQuery {
    limit: number;
    page: number;
}