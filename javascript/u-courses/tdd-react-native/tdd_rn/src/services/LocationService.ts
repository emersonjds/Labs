import GetLocation from 'react-native-get-location';

class LocationService {
  static async getCurrentPosition() {
    return GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then(({ latitude, longitude }) => ({ latitude, longitude }));
  }
}

export default LocationService;
