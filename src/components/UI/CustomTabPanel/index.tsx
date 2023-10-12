import React from 'react';

interface TabPanelProps {
  index: number;
  value: number;
}

export const CustomTabPanel: React.FC<React.PropsWithChildren<TabPanelProps>> = ({
  children,
  value,
  index,
  ...props
}) => {
  return (
    <div hidden={value !== index} {...props}>
      {value === index && children}
    </div>
  );
};
