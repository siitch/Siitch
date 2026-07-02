module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: ['react-native-reanimated/plugin'],
    overrides: [
      {
        // Work around a bug in expo/virtual/streams.js: @babel/plugin-transform-runtime
        // (enabled by @react-native/babel-preset via `enableBabelRuntime`) injects a
        // top-level `require("@babel/runtime/helpers/defineProperty")` call into this
        // vendored polyfill. It crashes with "Property 'require' doesn't exist" on
        // Hermes because this file loads as an unwrapped Metro pre-module, before
        // Metro's require is available. Disable the runtime-helper injection just for
        // this one file so Babel doesn't generate that call in the first place.
        // See: https://github.com/expo/expo/issues/39474
        test: /expo[\/\\]virtual[\/\\]streams\.js$/,
        presets: [['module:@react-native/babel-preset', {enableBabelRuntime: false}]],
      },
    ],
  };
};
