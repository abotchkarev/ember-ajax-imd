import Service from '@ember/service';
declare const AjaxService: Readonly<typeof Service> & (new (properties?: object | undefined) => {
    contentType: string;
    headers: import("../-private/types").Headers | undefined;
    host: string | undefined;
    namespace: string | undefined;
    trustedHosts: (string | RegExp)[] | undefined;
    request<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    raw<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<import("../-private/types").RawResponse<T>>;
    _makeRequest<T>(hash: import("../-private/types").AJAXOptions): import("../-private/promise").default<import("../-private/types").RawResponse<T>>;
    post<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    put<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    patch<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    del<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    delete<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    get(url: string): any;
    _addTypeToOptionsFor(options: import("../-private/types").AJAXOptions | undefined, method: import("../-private/types").Method): import("../-private/types").AJAXOptions;
    _getFullHeadersHash(headers?: import("../-private/types").Headers | undefined): import("../-private/types").Headers;
    options(url: string, options?: import("../-private/types").AJAXOptions): import("../-private/types").AJAXOptions;
    _buildURL(url: string, options?: import("../-private/types").AJAXOptions): string;
    handleResponse<T>(status: number, headers: import("../-private/types").Headers, payload: T, requestData: import("../-private/types").RequestData): import("../errors").AjaxError | T;
    _createCorrectError(status: number, headers: import("../-private/types").Headers, payload: any, requestData: import("../-private/types").RequestData): import("../errors").AjaxError;
    _matchHosts(host: string | undefined, matcher?: string | RegExp | undefined): boolean;
    _shouldSendHeaders({ url, host }: import("../-private/types").AJAXOptions): boolean;
    generateDetailedMessage(status: number, headers: import("../-private/types").Headers, payload: any, requestData: import("../-private/types").RequestData): string;
    isUnauthorizedError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isForbiddenError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isInvalidError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isBadRequestError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isNotFoundError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isGoneError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isAbortError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isConflictError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isServerError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isSuccess(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    parseErrorResponse(responseText: string): any;
    normalizeErrorResponse(_status: number, _headers: import("../-private/types").Headers, payload: any): any;
} & Service) & (new (...args: any[]) => {
    contentType: string;
    headers: import("../-private/types").Headers | undefined;
    host: string | undefined;
    namespace: string | undefined;
    trustedHosts: (string | RegExp)[] | undefined;
    request<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    raw<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<import("../-private/types").RawResponse<T>>;
    _makeRequest<T>(hash: import("../-private/types").AJAXOptions): import("../-private/promise").default<import("../-private/types").RawResponse<T>>;
    post<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    put<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    patch<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    del<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    delete<T = any>(url: string, options?: import("../-private/types").AJAXOptions | undefined): import("../-private/promise").default<T>;
    get(url: string): any;
    _addTypeToOptionsFor(options: import("../-private/types").AJAXOptions | undefined, method: import("../-private/types").Method): import("../-private/types").AJAXOptions;
    _getFullHeadersHash(headers?: import("../-private/types").Headers | undefined): import("../-private/types").Headers;
    options(url: string, options?: import("../-private/types").AJAXOptions): import("../-private/types").AJAXOptions;
    _buildURL(url: string, options?: import("../-private/types").AJAXOptions): string;
    handleResponse<T>(status: number, headers: import("../-private/types").Headers, payload: T, requestData: import("../-private/types").RequestData): import("../errors").AjaxError | T;
    _createCorrectError(status: number, headers: import("../-private/types").Headers, payload: any, requestData: import("../-private/types").RequestData): import("../errors").AjaxError;
    _matchHosts(host: string | undefined, matcher?: string | RegExp | undefined): boolean;
    _shouldSendHeaders({ url, host }: import("../-private/types").AJAXOptions): boolean;
    generateDetailedMessage(status: number, headers: import("../-private/types").Headers, payload: any, requestData: import("../-private/types").RequestData): string;
    isUnauthorizedError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isForbiddenError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isInvalidError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isBadRequestError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isNotFoundError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isGoneError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isAbortError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isConflictError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isServerError(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    isSuccess(status: number, _headers: import("../-private/types").Headers, _payload: any): boolean;
    parseErrorResponse(responseText: string): any;
    normalizeErrorResponse(_status: number, _headers: import("../-private/types").Headers, payload: any): any;
} & Service);
export default AjaxService;
export declare class AjaxServiceClass extends AjaxService {
}
declare module '@ember/service' {
    interface Registry {
        ajax: AjaxServiceClass;
    }
}
