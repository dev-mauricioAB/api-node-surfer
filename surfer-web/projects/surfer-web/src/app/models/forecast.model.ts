import { GeoPosition } from './beach-position.model';

export interface ForecastModel {
  lat: number;
  lng: number;
  name: string;
  position: GeoPosition;
  rating: number;
  swellDirection: number;
  swellHeight: number;
  swellPeriod: 11.26;
  time: Date;
  waveDirection: number;
  waveHeight: number;
  windDirection: number;
  windSpeed: number;
}
