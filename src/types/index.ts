export type Method = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'Delete' | 'patch' | 'PATCH'
export interface FetchConfig {
    url?: string,
    data?: object,
    method?: Method,
    headers?: any,
    timeout?: number,
    responseType?: String
}

export type responseType = 'josn' | 'text'|'formData' | 'blob' | 'arrayBuffer'
