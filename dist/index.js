/** 等待一会 */
export const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
/** as JSON.parse */
export const parse = (str) => {
    let res;
    try {
        res = JSON.parse(str);
    }
    catch (error) {
        console.error(error);
    }
    return res;
};
/** as JSON.stringify */
export const stringify = (obj) => {
    let res;
    try {
        res = JSON.stringify(obj);
    }
    catch (error) {
        console.error(error);
    }
    return res;
};
/** 获取url中的参数 */
export const getUrlSearch = () => {
    const [, search] = window.location.href.split("?");
    const res = {};
    search?.split("&").forEach((e) => {
        const [key, value] = e.split("=");
        res[key] = value;
    });
    return res;
};
/** 设置url中的参数 */
export const setUrlSearch = (params) => {
    const [url] = window.location.href.split("?");
    const search = { ...getUrlSearch(), ...params };
    let res = "";
    Object.keys(search).forEach((key) => {
        res += `${key}=${search[key]}`;
    });
    window.location.href = `${url}?${res}`;
};
export default {
    sleep,
    parse,
    stringify,
    getUrlSearch,
    setUrlSearch,
};
