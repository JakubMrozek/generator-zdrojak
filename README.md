zdrojak-angular-generator
=========================

# AngularJS generator pro Zdrojak

Based on [generator-angular](https://github.com/yeoman/generator-angular/)

## Generators

Available generators:

* [zdrojak:controller](#controller)
* [zdrojak:directive](#directive)
* [zdrojak:filter](#filter)
* [zdrojak:route](#route)
* [zdrojak:service](#service)
* [zdrojak:view](#view)

**Note: Generators are to be run from the root directory of your app.**

### Route
Generates a controller and view, and configures a route in `public/js/app.js` connecting them.

Example:
```bash
yo zdrojak:route myroute
```

Produces `public/js/controllers/myroute.js`:
```javascript
angular.module('myMod').controller('MyrouteCtrl', ['$scope', function ($scope) {
  // ...
}]);
```

Produces `public/views/myroute.html`:
```html
<p>This is the myroute view</p>
```

### Controller
Generates a controller in `public/js/controllers`.

Example:
```bash
yo zdrojak:controller user
```

Produces `public/js/controllers/user.js`:
```javascript
angular.module('myMod').controller('UserCtrl', ['$scope', function ($scope) {
  // ...
}]);
```
### Directive
Generates a directive in `public/js/directives`.

Example:
```bash
yo zdrojak:directive myDirective
```

Produces `public/js/directives/myDirective.js`:
```javascript
angular.module('myMod').directive('myDirective', [function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the myDirective directive');
    }
  };
}]);
```

### Filter
Generates a filter in `public/js/filters`.

Example:
```bash
yo zdrojak:filter myFilter
```

Produces `public/js/filters/myFilter.js`:
```javascript
angular.module('myMod').filter('myFilter', [function () {
  return function (input) {
    return 'myFilter filter:' + input;
  };
}]);
```

### View
Generates an HTML view file in `public/views`.

Example:
```bash
yo zdrojak:view user
```

Produces `public/partials/user.html`:
```html
<p>This is the user view</p>
```

### Service
Generates an AngularJS service.

Example:
```bash
yo zdrojak:service myService
```

Produces `public/js/services/myService.js`:
```javascript
angular.module('myMod').factory('myService', function () {
  // ...
});
```

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)



