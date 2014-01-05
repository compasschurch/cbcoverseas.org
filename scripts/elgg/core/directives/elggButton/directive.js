define(function(require) {
    require('css!./styles.css')

    var styles = [
        'action',
        'cancel',
        'delete',
        'dropdown',
        'submit',
        'special'
    ];

    return {
        restrict: 'A',
        /**
         * @ngInject
         */
        link: function($element, $attrs) {
            $element.addClass('elgg-button');

            $attrs.$observe('elggButton', function(style) {

                styles.forEach(function(oldStyle) {
                    $element.removeClass('elgg-button-' + oldStyle);
                })

                if (styles.indexOf(style) >= 0) {
                    $element.addClass('elgg-button-' + style);
                }
            });
        }
    };
});
