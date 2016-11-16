angular
    .module('inspinia')
    .controller('wizardCtrl', function ($scope, $rootScope) {
        // All data will be store in this object
        $scope.formData = {};

        // After process wizard
        $scope.processForm = function () {
            alert('Wizard completed');
        };

    });