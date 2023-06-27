import { AxiosStatic } from 'axios';

export class StormGlass {
  readonly stormGlassApiParams = '';

  constructor(protected request: AxiosStatic) {}

  public async fetchPoints(lat: number, log: number) {
    this.request.get('');

    return {};
  }
}
