const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json"); // we can access to package.json dependencies

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      // to handle the navigation
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      // shared: ["react", "react-dom"], // dependencies that are going to share in order to avoid duplicates - especific dependencies
      shared: packageJson.dependencies, // dependencies that are going to share in order to avoid duplicates - all package.json dependencies
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
