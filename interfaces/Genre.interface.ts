import { BaseInterface } from "./Base.interface";
import { PaginatedResults } from "./Misc.interface";

export interface GenreInterface extends BaseInterface {
    name: string;
}

export type GenreResponse = GenreInterface | PaginatedResults<GenreInterface>;