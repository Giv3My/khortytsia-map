export const clipboardPopupAnimation = {
  variants: {
    initial: { translateY: 100 },
    visible: { translateY: 0 },
    hidden: { translateY: 100 },
  },
  transition: { duration: 0.3, type: 'spring', damping: 12, mass: 0.75 },
};
