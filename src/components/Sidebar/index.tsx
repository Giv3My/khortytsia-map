import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useCopyToClipboard } from '../../hooks';
import { cutUrl, openLink, translate } from '../../utils';
import { CoordsType, PointType } from '../Map/types';
import { sidebarAnimation } from './animation.options';
import { tabsStyles } from './sidebar.styles';

import { Box, Tabs, Tab } from '@mui/material';
import { ClipboardPopup, CustomTabPanel } from '../UI';

interface SidebarProps {
  selectedPoint: PointType | null;
  handleClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedPoint, handleClose }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const [activeTab, setActiveTab] = React.useState(0);

  const handleChangeTab = (e: React.SyntheticEvent, newTab: number) => {
    setActiveTab(newTab);
  };

  const handleGoToGoogleMaps = (coords: CoordsType) => {
    return openLink(`https://www.google.com/maps/search/${coords.lat},${coords.lng}`);
  };

  const getTextByKey = (key: string) => {
    return translate('uk', key);
  };

  return (
    <>
      <AnimatePresence>
        {selectedPoint && (
          <motion.div
            className="sidebar"
            initial="initial"
            animate="openned"
            exit="closed"
            variants={sidebarAnimation.variants}
            transition={sidebarAnimation.transition}
          >
            <div className="close" onClick={handleClose}>
              <span className="icon material-symbols-outlined">close</span>
            </div>
            <div className="place-img">
              <img src={selectedPoint.data.img} alt="place-bg" />
            </div>
            <Box sx={{ maxWidth: '350px', margin: '0 auto' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs sx={tabsStyles} value={activeTab} onChange={handleChangeTab}>
                  <Tab label="About" />
                  <Tab label="Reference" />
                </Tabs>
              </Box>
            </Box>
            <CustomTabPanel value={activeTab} index={0}>
              <div className="sidebar-wrapper">
                <h1 className="place-name">{getTextByKey(selectedPoint.name)}</h1>
                <p className="place-description">
                  {getTextByKey(selectedPoint.data.description)}
                </p>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={activeTab} index={1}>
              <div className="place-info">
                <div
                  className="address"
                  onClick={copy(getTextByKey(selectedPoint.data.address))}
                >
                  <span className="icon material-symbols-outlined">location_on</span>
                  <p>{getTextByKey(selectedPoint.data.address)}</p>
                  <div
                    className="copy"
                    onClick={copy(getTextByKey(selectedPoint.data.address))}
                  >
                    <span className="icon material-symbols-outlined">content_copy</span>
                  </div>
                </div>
                <div className="website" onClick={copy(selectedPoint.data.website_url)}>
                  <span className="icon material-symbols-outlined">public</span>
                  <a
                    href={selectedPoint.data.website_url}
                    target="_blank"
                    rel="noopener,noreferrer"
                  >
                    {cutUrl(selectedPoint.data.website_url)}
                  </a>
                  <div className="copy" onClick={copy(selectedPoint.data.website_url)}>
                    <span className="icon material-symbols-outlined">content_copy</span>
                  </div>
                </div>
                <div className="phone" onClick={copy(selectedPoint.data.phone)}>
                  <span className="icon material-symbols-outlined">call</span>
                  <p>{selectedPoint.data.phone}</p>
                  <div className="copy" onClick={copy(selectedPoint.data.phone)}>
                    <span className="icon material-symbols-outlined">content_copy</span>
                  </div>
                </div>
              </div>
              <div
                className="open-google-maps"
                onClick={handleGoToGoogleMaps(selectedPoint.coords)}
              >
                <p>Go to Google Maps</p>
              </div>
            </CustomTabPanel>
          </motion.div>
        )}
      </AnimatePresence>
      {<ClipboardPopup isVisible={!!copiedText} />}
    </>
  );
};
