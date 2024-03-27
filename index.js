/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);

async function playbackService() {
  // TODO: Attach remote event handlers
}
TrackPlayer.registerPlaybackService(() => playbackService);
