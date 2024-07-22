module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
  dependencies: {
    // 'react-native-bitmovin-player': {  //this doesnt appear to support autolink
    //   platforms: {
    //     android: null,
    //   },
    // },
    // 'react-native-twilio-video-webrtc': {  //this was linked manually but should autolink, if we wanna try later
    //   platforms: {
    //     android: null,
    //     ios: null,
    //   },
    // },
    'react-native-flipper': {
      platforms: {
        ios: null,
      },
    },
  }, // make sure this deps are all valid installed packages or empty if you don't need it
};
