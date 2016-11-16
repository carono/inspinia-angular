angular
    .module('inspinia')
    .controller('codeEditorCtrl', function ($scope) {
        $scope.editorOptions = {
            lineNumbers: true,
            matchBrackets: true,
            styleActiveLine: true,
            theme:"ambiance"
        };

        $scope.editorOptions2 = {
            lineNumbers: true,
            matchBrackets: true,
            styleActiveLine: true
        };

    });