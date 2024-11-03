const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'modulos.ts'),
    output: {
        filename: 'modulos.js',
        path: __dirname, // Salida en la misma carpeta
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname), // Sirve desde la carpeta Modulos
        },
        compress: true,
        port: 8080,
        historyApiFallback: true, // Maneja la navegación
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'), // Archivo HTML
        }),
    ],
};