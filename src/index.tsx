import { NativeModules, requireNativeComponent, NativeEventEmitter, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-boostlingo-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const BoostlingoSdk = NativeModules.BoostlingoSdk
  ? NativeModules.BoostlingoSdk
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export default BoostlingoSdk;
export const BLVideoView = requireNativeComponent('BLVideoView');
export const BLEventEmitter = new NativeEventEmitter(BoostlingoSdk);
