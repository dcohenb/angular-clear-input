angular-clear-input
===================

AngularJS plugin that adds a clear button to input box

# Usage:
- Simple usage:
```html
<input type="text" ng-model="myModel" clear-input />
```

- Expression:
```html
<input type="text" ng-model="myModel" clear-input="myModel = 'newVal'" />
```

- Function Call:
```html
<input type="text" ng-model="myModel" clear-input="doSomething()" />
```

## Advanced options:
- Add a class to the appended button, Defaults to: 'clear-btn'.
```html
<input type="text" ng-model="myModel" clear-input clear-btn-class="custom-class" />
```

- Replace the button HTML markup with a custom one, Defaults to: '<span>X</span>'.
```html
<input type="text" ng-model="myModel" clear-input clear-btn-markup="<img src='clear.png' />" />
```