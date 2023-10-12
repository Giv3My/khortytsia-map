export interface CoordsType {
  lat: number;
  lng: number;
}

export interface PointDataType {
  img: string;
  address: string;
  website_url: string;
  phone: string;
  description: string[];
}

export interface PointType {
  name: string;
  coords: CoordsType;
  marker: string;
  link?: string;
  data: PointDataType;
}
