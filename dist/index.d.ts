/** 等待一会 */
export declare const sleep: (time: number) => Promise<unknown>;
/** as JSON.parse */
export declare const parse: (str: string) => any;
/** as JSON.stringify */
export declare const stringify: (obj: object) => string | undefined;
/** 获取url中的参数 */
export declare const getUrlSearch: () => Record<string, string>;
/** 设置url中的参数 */
export declare const setUrlSearch: (params: Record<string, string>) => void;
declare const _default: {
    sleep: (time: number) => Promise<unknown>;
    parse: (str: string) => any;
    stringify: (obj: object) => string | undefined;
    getUrlSearch: () => Record<string, string>;
    setUrlSearch: (params: Record<string, string>) => void;
};
export default _default;
