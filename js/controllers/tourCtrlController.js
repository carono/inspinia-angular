angular
    .module('inspinia')
    .controller('tourCtrl', function ($scope) {

        $scope.preparebody = function (tour) {
            $('body').addClass('tour-open')
        };

        $scope.clearbody = function (tour) {
            $('body').removeClass('tour-close')
        }

    });