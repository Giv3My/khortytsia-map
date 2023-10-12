import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { openLink } from '../../utils';
import { points, centralPoint } from './data';
import { PointType } from './types';
import { defaultMapOptions, center } from './map.options';
import { containerStyles } from './map.styles';
import { GOOGLE_MAP_API_KEY } from '../../config';

import { Point } from '..';

interface MapProps {
  handleSelectPoint: (point: PointType) => void;
}

export const Map: React.FC<MapProps> = ({ handleSelectPoint }) => {
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return (
    <div className="map">
      {isLoaded && (
        <GoogleMap
          options={defaultMapOptions}
          mapContainerStyle={containerStyles}
          center={center}
          zoom={14}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker
            position={centralPoint.coords}
            title={centralPoint.name}
            icon={centralPoint.marker}
            onClick={openLink(centralPoint.link!)}
          />
          {points.map((point) => (
            <Point key={point.name} point={point} onSelectPoint={handleSelectPoint} />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};
