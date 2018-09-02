
const { start } = require('../index');
const make = require('./make');

make();

start({
    cleanDist: true,
    devtool: false,
    module: {
        less: true,
        vue: true,
        babel: true,
        sass: true,
        jsx: true,
    }
});