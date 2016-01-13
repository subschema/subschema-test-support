///(?!.*(index).js$).*\.js(x)
var ctx = require.context('./', false, /(?!.*-setup\.jsx?$)\.jsx?/);
var rctx = require.context('!!raw!./', false, /-setup\.js/);
module.exports = ctx.keys().reduce(function (obj, key) {

    if (/(index|-setup|context)/.test(key)) {
        return obj;
    }
    var setup = obj[key.replace(/\.jsx?$/, '').replace(/.*\//, '')] = ctx(key);
    if (setup.setupFile) {
     var txt =   setup.setupTxt = rctx('./'+setup.setupFile);
    }
    return obj;
}, {});
