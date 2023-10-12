export const openLink = (url: string) => () => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

  if (newWindow) {
    newWindow.opener = null;
  }
};
