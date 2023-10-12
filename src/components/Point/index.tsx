import React from 'react';
import { Marker } from '@react-google-maps/api';

import { PointType } from '../Map/types';

import './Point.scss';

interface PointProps {
  point: PointType;
  onSelectPoint: (point: PointType) => void;
}

export const Point: React.FC<PointProps> = ({ point, onSelectPoint }) => {
  const handleSelectPoint = () => {
    onSelectPoint(point);
  };

  return (
    <Marker
      position={point.coords}
      title={point.name}
      icon={point.marker}
      onClick={handleSelectPoint}
    />
  );
};
