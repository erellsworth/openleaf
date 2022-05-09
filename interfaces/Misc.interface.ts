export interface PaginatedResults {
    contents: unknown[];
    total: number;
    page: number;
}

export interface ApiResponse {
    success: boolean;
    data?: any;
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