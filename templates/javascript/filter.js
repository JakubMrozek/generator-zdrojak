'use strict';

angular.module('<%= appname.toLowerCase() %>.filter').filter('<%= _.camelize(name) %>', [function () {
    return function (input) {
      return '<%= _.camelize(name) %> filter: ' + input;
    };
  }]);
