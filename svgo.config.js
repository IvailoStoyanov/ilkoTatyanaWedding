export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          mergePaths: false,
        },
      },
    },
    {
      name: "convertPathData",
      params: {
        floatPrecision: 1,
        transformPrecision: 1,
      },
    },
    "removeDimensions",
  ],
};
