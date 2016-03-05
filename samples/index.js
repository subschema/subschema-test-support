///(?!.*(index).js$).*\.js(x)
var ctx = require.context('./', false, /(?!.*-setup\.jsx?$)\.jsx?/);
var rctx = require.context('!!raw!./', false, /-setup\.js/);
var fctx = require.context('../src/sample-loader!./', false, /-setup\.jsx?/);
module.exports = ctx.keys().reduce(function (obj, key) {

    if (/(index|-setup|context)/.test(key)) {
        return obj;
    }
    var setup = obj[key.replace(/\.jsx?$/, '').replace(/.*\//, '')] = ctx(key);
    if (setup.setupFile) {
        setup.setupTxt = rctx('./' + setup.setupFile);
        setup.setupFunc = fctx('./' + setup.setupFile);
    }
    return obj;
}, {});
