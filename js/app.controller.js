(function () {
    'use strict';
    angular
        .module("demoApp")
        .demoApp.controller("mainController", mainController);

    function mainController($scope, userService) {
        $scope.users = userService.users();
        $scope.newUser = {};
        $scope.addUser = function () {
            userService.add($scope.newUser);
            $scope.newUser = {};
        }
    });
})();