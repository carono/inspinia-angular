angular
    .module('inspinia')
    .controller('draggablePanels', function ($scope) {

        $scope.sortableOptions = {
            connectWith: ".connectPanels",
            handler: ".ibox-title"
        };

    });