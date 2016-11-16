angular
    .module('inspinia')
    .controller('truncateCtrl', function ($scope){

        $scope.truncateOptions = {
            watch: 'window'
        };

        $scope.truncateOptions2 = {
            watch: 'window',
            ellipsis: ' ///...'
        };

        $scope.truncateOptions3 = {
            watch: 'window',
            wrap: 'letter'
        }

    });