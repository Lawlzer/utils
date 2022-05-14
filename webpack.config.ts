import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    target: 'node8.9',
    entry: './src/index.ts',
    output: {
        filename: 'dist.js',
        libraryTarget: 'commonjs2',
        path: path.resolve('dist'), //`path.resolve(__dirname, 'webpack')`,
    },
    optimization: {
        minimize: false,
    },
};


export default config;