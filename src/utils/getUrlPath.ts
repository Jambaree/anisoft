import parsePath from "parse-path";

export const getUrlPath = (url) => {
  const parsedUrl = parsePath(url);
  return parsedUrl.pathname;
};
