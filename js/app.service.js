(function () {
    'use strict';
    angular
        .module("demoApp")
        .demoApp.service('userService', userService);

    function userService(){
        var collection = [
            {firstName: 'Betty', lastName: 'Boop'},
            {firstName: 'Donald', lastName: 'Paul'},
            {firstName: 'Jessica', lastName: 'Rabbit'}
        ];
        return {
            users: function() {
                return collection;
            },
            add: function(object) {
                collection.push(object);
            }
        }
    });
})();