var utils = require('./utils');
var config = require('../config');
var isProduction = process.env.NODE_ENV === 'production';
var bourbonIncludes = require("bourbon-neat").includePaths;

var loaders = utils.cssLoaders({
    sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
    extract: isProduction
});

// TODO: Fix HACK
var scssLoaders = loaders.scss;
var lastLoader = scssLoaders[scssLoaders.length - 1];
lastLoader.options.includePaths = bourbonIncludes;

var sassLoaders = loaders.sass;
lastLoader = sassLoaders[sassLoaders.length - 1];
lastLoader.options.includePaths = bourbonIncludes;

module.exports = {
    loaders: loaders
};
