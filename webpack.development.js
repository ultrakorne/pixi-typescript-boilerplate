const webpack = require("webpack");

module.exports = (env) => {
    /** @type {import('webpack').Configuration} */
    const devConfig = {
        mode: env.mode,
        devtool: "inline-source-map",

        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(false),
                VERSION: JSON.stringify("5fa3b9"),
                BROWSER_SUPPORTS_HTML5: true,
                TWO: "1+1",
                "typeof window": JSON.stringify("object"),
            }),
        ],
    };

    return devConfig;
};
