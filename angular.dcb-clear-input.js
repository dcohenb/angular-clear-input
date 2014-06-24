/*
 Angular Clear Input directive
 (c) 2014 Daniel Cohen. http://dcb.co.il
 License: MIT
 */
angular.module('dcbClearInput', [])
    .directive('clearInput', ['$parse',
        function($parse) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, element, attr) {
                    var htmlMarkup = attr.clearBtnMarkup ? attr.clearBtnMarkup : '<span>X</span>';
                    var btn = angular.element(htmlMarkup);
                    btn.addClass(attr.clearBtnClass ? attr.clearBtnClass : "clear-btn");
                    element.after(btn);
                    element.css("padding-right", "25px");
                    

                    btn.on('click', function(event) {
                        if (attr.clearInput) {
                            var fn = $parse(attr.clearInput);
                            scope.$apply(function() {
                                fn(scope, {
                                    $event: event
                                });
                            });
                        } else {
                            scope[attr.ngModel] = null;
                            scope.$digest();
                        }
                    });

                    scope.$watch(attr.ngModel, function(val) {
                        var hasValue = val && val.length > 0;
                        if (!attr.clearDisableVisibility) {
                            btn.css('visibility', hasValue ? 'visible' : 'hidden');
                        }

                        if (hasValue && !btn.hasClass('clear-visible')) {
                            btn.removeClass('clear-hidden').addClass('clear-visible');
                        } else if (!hasValue && !btn.hasClass('clear-hidden')) {
                            btn.removeClass('clear-visible').addClass('clear-hidden');
                        }
                        btn.css('left', '-20px').css('position', 'relative');
                    });
                }
            };
        }
    ]);
