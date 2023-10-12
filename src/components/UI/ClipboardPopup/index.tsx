import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { clipboardPopupAnimation } from './animation.options';

interface ClipboardPopupProps {
  isVisible: boolean;
}

export const ClipboardPopup: React.FC<ClipboardPopupProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="clipboard-message"
          initial="initial"
          animate="visible"
          exit="hidden"
          variants={clipboardPopupAnimation.variants}
          transition={clipboardPopupAnimation.transition}
        >
          <div className="clipboard-wrapper">
            <p>Text copied to clipboard</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
