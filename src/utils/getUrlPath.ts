import parsePath from "parse-path";

export const getUrlPath = (url) => {
  const parsedUrl = parsePath(url);
  if (parsedUrl.href.includes(process.env.NEXT_PUBLIC_WP_URL)) {
    return parsedUrl.pathname;
  } else {
    return url;
  }
};
