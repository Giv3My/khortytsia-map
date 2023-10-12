import { center } from './map.options';
import { PointType } from './types';

import Trident from '../../assets/ukrainecapital.svg';
import PointMarker from '../../assets/map-marker.png';
import ZaporizkaSich from '../../assets/zaporozka-sich.jpg';
import Sanctuaries from '../../assets/sanctuaries.jpg';
import ScythianState from '../../assets/scythian-state.jpg';
import KhortytsiaLabyrinth from '../../assets/khortytsia-labyrinth.jpg';
import Arboretum from '../../assets/arboretum.jpg';
import Protolche from '../../assets/protolche.jpg';
import ShippingMuseum from '../../assets/shipping-museum.jpg';
import Truglav from '../../assets/truglav.jpeg';
import CossackMamaiMonument from '../../assets/cossack-mamai-monument.jpg';

export const points: PointType[] = [
  {
    name: 'point1.name',
    coords: {
      lat: 47.85737064685984,
      lng: 35.07491932414972,
    },
    marker: PointMarker,
    data: {
      img: ZaporizkaSich,
      address: 'point1.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point1.data.description',
    },
  },
  {
    name: 'point2.name',
    coords: {
      lat: 47.8579377313526,
      lng: 35.073230295455666,
    },
    marker: PointMarker,
    data: {
      img: Sanctuaries,
      address: 'point2.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point2.data.description',
    },
  },
  {
    name: 'point3.name',
    coords: {
      lat: 47.81275972711987,
      lng: 35.11287374014729,
    },
    marker: PointMarker,
    data: {
      img: ScythianState,
      address: 'point3.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point3.data.description',
    },
  },
  {
    name: 'point4.name',
    coords: {
      lat: 47.85977165421714,
      lng: 35.06258685030032,
    },
    marker: PointMarker,
    data: {
      img: KhortytsiaLabyrinth,
      address: 'point4.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point4.data.description',
    },
  },
  {
    name: 'point5.name',
    coords: {
      lat: 47.83004762407675,
      lng: 35.08220102512254,
    },
    marker: PointMarker,
    data: {
      img: Arboretum,
      address: 'point5.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point5.data.description',
    },
  },
  {
    name: 'point6.name',
    coords: {
      lat: 47.79230756791437,
      lng: 35.1424895221127,
    },
    marker: PointMarker,
    data: {
      img: Protolche,
      address: 'point6.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point6.data.description',
    },
  },
  {
    name: 'point7.name',
    coords: {
      lat: 47.79989188445637,
      lng: 35.134930206407034,
    },
    marker: PointMarker,
    data: {
      img: ShippingMuseum,
      address: 'point7.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point7.data.description',
    },
  },
  {
    name: 'point8.name',
    coords: {
      lat: 47.84158074455956,
      lng: 35.07409433837207,
    },
    marker: PointMarker,
    data: {
      img: CossackMamaiMonument,
      address: 'point8.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point8.data.description',
    },
  },
  {
    name: 'point9.name',
    coords: {
      lat: 47.85023887887131,
      lng: 35.075483024217874,
    },
    marker: PointMarker,
    data: {
      img: Truglav,
      address: 'point9.data.address',
      website_url: 'https://ostriv.org',
      phone: '095 914 7706',
      description: 'point9.data.description',
    },
  },
];

export const centralPoint = {
  name: 'Khortytsia',
  coords: center,
  marker: Trident,
  link: 'https://www.rada.gov.ua/en',
} as PointType;
