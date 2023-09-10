const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        publicPath: '/public/',
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.ts', '.js'] // Важно указать расширение .ts и .js
    }
}