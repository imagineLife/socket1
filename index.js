const xp = require('express');
const http = require('http');
const bp = require('body-parser')
const socket = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = xp();
const server = http.createServer(app);
const io = socket(server);

app.use(xp.static(__dirname + '/dist'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bp.urlencoded({ extended : false }))

server.listen(3000)