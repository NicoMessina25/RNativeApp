import { registerRootComponent } from 'expo';

import App from './App';
import React from 'react';
import messaging from "@react-native-firebase/messaging";
import { AppRegistry } from 'react-native';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message is handled in the background!', remoteMessage);
});

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    console.log('App launched by iOS in background, ignore it' );
    // App has been launched in the background by iOS, ignore
    return null;
  }
  return <App />;
}

AppRegistry.registerComponent("rnativeapp", () => HeadlessCheck)
