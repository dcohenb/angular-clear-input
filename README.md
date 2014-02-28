angular-clear-input
===================

A simple AngularJS plugin that adds a clear button to input box

# Installation:
1. Download and import the plugin script.
```html
<link rel="stylesheet" href="lib/angular-clear-input/angular.dcb-clear-input.min.js"/>
```
2. Add 'dcbClearInput' to your angular app module dependencies list.
```javascript
angular.module('myAngularApp', ['dcbClearInput']);
```
3. Add the 'clear-input' attribute to yout input
```html
<input type="text" ng-model="myModel" clear-input />
```

## Usage:
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

### Advanced options:
- Add a class to the appended button, Defaults to: 'clear-btn'.
```html
<input type="text" ng-model="myModel" clear-input clear-btn-class="custom-class" />
```

- Replace the button HTML markup with a custom one, Defaults to: '<span>X</span>'.
```html
<input type="text" ng-model="myModel" clear-input clear-btn-markup="<img src='clear.png' />" />
```

- Prevant the automatic toggling of the css visibilty property for the clear button
```html
<input type="text" ng-model="myModel" clear-input clear-disable-visibility="true" />
```