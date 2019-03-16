module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        rootPathSufix: "src"
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        "babel-plugin-root-import",
        {
          rootPathSufix: "src"
        }
      ]
    }
  }
};
