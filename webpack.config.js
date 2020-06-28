const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
    /** @type {import('webpack').Configuration} */
    const config = {
        entry: "./src/index.ts",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
        },

        module: {
            rules: [
                {
                    test: /\.js?$/,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },

        plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    };

    const envConfig = require(path.resolve(__dirname, `./webpack.${env.mode}.js`))(env);

    // todo  merge env config with config
    return config;
};
