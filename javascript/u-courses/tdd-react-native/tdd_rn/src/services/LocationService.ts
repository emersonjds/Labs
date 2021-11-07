import Geolocation from '@react-native-community/geolocation';

class LocationService {
  static async getCurrentPosition() {
    return Geolocation.getCurrentPosition(
      (position: { coords: { latitude: any; longitude: any } }) => {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });
  }
}

export default LocationService;
