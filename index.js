import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';
import {YellowBox, Redbox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);

