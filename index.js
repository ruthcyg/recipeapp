/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-safe-area-context';
import 'react-native-screens';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
