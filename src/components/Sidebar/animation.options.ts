export const sidebarAnimation = {
  variants: {
    initial: { translateX: '-100%' },
    openned: { translateX: 0 },
    closed: { translateX: '-130%' },
  },
  transition: { duration: 0.5, type: 'spring', damping: 14, mass: 0.7 },
};
