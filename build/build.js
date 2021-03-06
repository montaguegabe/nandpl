require('./check-versions')();

process.env.NODE_ENV = 'production';

var ora = require('ora');
var rm = require('rimraf');
var path = require('path');
var utils = require('./utils');
var chalk = require('chalk');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('./webpack.prod.conf');

var spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {

    if (err) throw err;

    // Build OCaml
    console.log('\n> Building OCaml...\n');
    utils.exec('$(npm bin)/bsb');

    // Run webpack
    webpack(webpackConfig, function (err, stats) {
        spinner.stop();
        if (err) throw err;
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n');
        console.log('Removing strictness...\n');

        utils.exec("export LANG=C; export LC_CTYPE=C; find ./dist -type f -print0 | xargs -0 sed -i '' 's/use strict/use relaxed/g'");

        console.log(chalk.cyan('  Build complete.\n'));
    });
});
