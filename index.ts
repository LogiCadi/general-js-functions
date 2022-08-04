/** 等待一会 */
export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

/** as JSON.parse */
export const parse = (str: string) => {
  let res;
  try {
    res = JSON.parse(str);
  } catch (error) {
    console.error(error);
  }

  return res;
};

/** as JSON.stringify */
export const stringify = (obj: object) => {
  let res;
  try {
    res = JSON.stringify(obj);
  } catch (error) {
    console.error(error);
  }

  return res;
};

/** 获取url中的参数 */
export const getUrlSearch = () => {
  const [, search] = window.location.href.split("?");
  const res: Record<string, string> = {};
  search?.split("&").forEach((e) => {
    const [key, value] = e.split("=");
    res[key] = value;
  });

  return res;
};

/** 设置url中的参数 */
export const setUrlSearch = (params: Record<string, string>, merge = false) => {
  const [url] = window.location.href.split("?");
  const search = merge ? { ...getUrlSearch(), ...params } : params;
  const res: string[] = [];
  Object.keys(search).forEach((key) => {
    res.push(`${key}=${search[key]}`);
  });
  window.location.href = `${url}?${res.join("&")}`;
};

export default {
  sleep,
  parse,
  stringify,
  getUrlSearch,
  setUrlSearch,
};
