import { CoordsType } from './types';
import { mapStyles } from './map.styles';

export const center: CoordsType = {
  lat: 47.81985034311318,
  lng: 35.09817368041254,
};

export const defaultMapOptions = {
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  keyboardShortcuts: false,
  minZoom: 14,
  maxZoom: 20,
  restriction: {
    latLngBounds: {
      north: 47.87090742670957,
      south: 47.77333259371711,
      west: 35.03810092832482,
      east: 35.15901435650889,
    },
  },
  styles: mapStyles,
};
