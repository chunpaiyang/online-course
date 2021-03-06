import express from 'express';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import makeWebpackConfig from '../config.webpack';

const app = express();

const webpackConfig = makeWebpackConfig(process.env);
const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHot(compiler));

app.listen(8080);
