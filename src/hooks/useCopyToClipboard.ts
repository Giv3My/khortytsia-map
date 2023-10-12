import React from 'react';

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const copy = (text: string) => async () => {
    if (!navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(text);
    setCopiedText(text);

    setTimeout(() => {
      setCopiedText(null);
    }, 3000);
  };

  return [copiedText, copy] as const;
};
