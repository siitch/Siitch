module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: ['react-native-reanimated/plugin'],
    env: {
      production: {
        presets: ['react-native-paper/babel'],
      }
    },
  };
};
