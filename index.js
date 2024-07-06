import { AppRegistry } from 'react-native';
import App from './src/App';
import amplifyconfig from './src/amplifyconfiguration.json';
import { name as appName } from './app.json';
// index.js

import { Amplify } from 'aws-amplify';
Amplify.configure(amplifyconfig);

AppRegistry.registerComponent(appName, () => App);
