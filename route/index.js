'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
  this.hookFor('zdrojak:controller');
  this.hookFor('zdrojak:view');
}
util.inherits(Generator, ScriptBase);

Generator.prototype.rewriteAppJs = function () {
  angularUtils.rewriteFile({
    file: path.join(this.env.options.appPath, 'js/app.js'),
    needle: '.otherwise',
    splicable: [
      '$routeProvider.when(\'/' + this.name + '\', { templateUrl: \'views/' + this.name + '.html\', controller: \'' + this._.classify(this.name) + 'Ctrl\'})'
    ]
  });
};
