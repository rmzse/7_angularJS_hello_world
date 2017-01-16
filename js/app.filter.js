(function () {
    'use strict';
    angular
        .module("demoApp")
        .demoApp.filter('sortByFirstName', sortByFirstName);

    function sortByFirstName() {
        return function (array) {
            function compare(a, b) {
                return a.firstName.localeCompare(b.firstName)
            }
            return array.sort(compare);
        }
    }
})();