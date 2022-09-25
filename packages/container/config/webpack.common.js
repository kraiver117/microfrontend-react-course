module.exports = {
  module: {
    rules: [
      // babel transform our code from current emac script version yo emacscript 5
      {
        test: /\.m?js$/, //Regex to check files that will be process by babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
