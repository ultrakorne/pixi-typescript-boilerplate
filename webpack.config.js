const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) =>
    /** @type {import('webpack').Configuration} */
    ({
        mode: env.mode,
        entry: "./src/index.ts",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                    ],
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
        devtool: env.mode == "development" ? "inline-source-map" : "none",
    });
