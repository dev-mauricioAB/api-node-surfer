import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3Hours from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalize3Hours from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalize forecast from the StormGlass service', async () => {
    const lat = -33.4545;
    const log = 145.4545;

    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3Hours);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, log);

    expect(response).toEqual(stormGlassNormalize3Hours);
  });
});
