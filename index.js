/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import App from './src/app';
import {name as appName} from './app.json';
import TrackService from './src/controller/player-service';

// TrackService();
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => TrackService);
