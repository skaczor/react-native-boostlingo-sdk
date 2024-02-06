# BoostlingoSDK

This module is not published through NPM and should be added locally.

## Installation

- `git submodule add git@github.com:skaczor/react-native-boostlingo-sdk.git ./modules/react-native-boostlingo-sdk`
- add "react-native-boostlingo-sdk": "link:./modules/react-native-boostlingo-sdk" to package.js under `dependencies`
- run `yarn`

### IOS

- run `pod install --repo-update --project-directory=ios` in `ios` to download the dependencies

## Issues

<https://github.com/boostlingo/react-native-boostlingo-sdk/issues>

## Usage

```
import BoostlingoSdk, {BLVideoView, BLEventEmitter} from 'react-native-boostlingo-sdk';

let blToken = '...';

await BoostlingoSdk.initialize({
  authToken: blToken,
  region: 'us',
});

BoostlingoSdk.makeVideoCall({
 genderId: 0,
 languageFromId: blLanguageFromId,
 languageToId: blLanguageToId,
 serviceTypeId: blServiceTypeId,
});
```


## Documentation

<https://github.com/boostlingo/boostlingo-ios>

<https://github.com/boostlingo/boostlingo-android>

## License

MIT
