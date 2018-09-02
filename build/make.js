const fs = require('fs-extra');

module.exports = function () {

    fs.copySync('../make-webpack-config/lib', './lib');
    fs.copySync('../make-webpack-config/scripts', './scripts');
    fs.copySync('../make-webpack-config/index.js', './index.js');

}