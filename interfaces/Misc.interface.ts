export interface PaginatedResults<T> {
    contents: T[];
    total: number;
    page: number;
}

export interface ApiResponse<T=void> {
    success: boolean;
    data?: T;
    error?: {
        message: string;
        code: number;
    }
}

export interface NuxtMeta {
    hid: string;
    name: string;
    content: string;
}