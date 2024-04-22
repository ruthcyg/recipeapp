import {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';

const useRequestLocationPermission = async () => {
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location to improve the service.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location services');
          setPermissionGranted(true);
        } else {
          console.log('Location permission denied');
          setPermissionGranted(false);
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestPermission();
  }, []);

  return permissionGranted;
};

export default useRequestLocationPermission;
