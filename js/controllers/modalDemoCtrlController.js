angular
    .module('inspinia')
    .controller('modalDemoCtrl', function ($scope, $uibModal,$controller) {

        $scope.open = function () {

            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal_example.html',
                controller: $controller('ModalInstanceCtrl')
            });
        };

        $scope.open1 = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal_example1.html',
                controller: $controller('ModalInstanceCtrl')
            });
        };

        $scope.open2 = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal_example2.html',
                controller: $controller('ModalInstanceCtrl'),
                windowClass: "animated fadeIn"
            });
        };

        $scope.open3 = function (size) {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal_example3.html',
                size: size,
                controller: $controller('ModalInstanceCtrl')
            });
        };

        $scope.open4 = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/modal_example2.html',
                controller: $controller('ModalInstanceCtrl'),
                windowClass: "animated flipInY"
            });
        };
    });