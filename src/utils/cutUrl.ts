export const cutUrl = (url: string) => {
  if (!url.includes('http')) {
    return;
  }

  if (url.includes('https')) {
    return url.slice(8);
  } else {
    return url.slice(7);
  }
};
