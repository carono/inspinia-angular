angular
    .module('inspinia')
    .controller('translateCtrl', function ($translate, $scope) {
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
            $scope.language = langKey;
        };
    });