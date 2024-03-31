export const getIdFromUrl = (url?: string) => {
  // example "url": "https://sw-api.starnavi.io/people/1/"
  if (!url) return "";

  const urlAsArray = url.split("/");

  if (urlAsArray?.length < 2) return "";

  return urlAsArray[urlAsArray.length - 2];
};
