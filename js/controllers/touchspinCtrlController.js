angular
    .module('inspinia')
    .controller('touchspinCtrl', function ($scope) {

        $scope.inputteresxcs = 55;
        $scope.spinOption1 = {
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
        };

        $scope.spinOption2 = {
            verticalbuttons: true
        }

        $scope.spinOption3 = {
            postfix: '%'
        }

        $scope.spinOption4 = {
            postfix: "a button",
            postfix_extraclass: "btn btn-default"
        }

    });