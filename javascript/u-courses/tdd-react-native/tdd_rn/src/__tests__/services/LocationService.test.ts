import LocationService from '../../services/LocationService';

describe('LocationService', () => {
  test('should return latitude and longitude', async () => {
    const position = await LocationService.getCurrentPosition();
    expect(position).toEqual({
      latitude: 0,
      longitude: 0,
    });
  });
});
