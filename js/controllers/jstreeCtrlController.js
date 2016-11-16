angular
    .module('inspinia')
    .controller('jstreeCtrl', function ($scope) {

        $scope.treeConfig = {
            'plugins': ['types', 'dnd'],
            'types': {
                'default': {
                    'icon': 'fa fa-folder'
                },
                'html': {
                    'icon': 'fa fa-file-code-o'
                },
                'svg': {
                    'icon': 'fa fa-file-picture-o'
                },
                'css': {
                    'icon': 'fa fa-file-code-o'
                },
                'img': {
                    'icon': 'fa fa-file-image-o'
                },
                'js': {
                    'icon': 'fa fa-file-text-o'
                }

            }
        };

        $scope.treeData = [
            {
                "id": "ajson1",
                "parent": "#",
                "text": "Admin theme",
                "state": {
                    "opened": true
                },
                "__uiNodeId": 1
            }, {
                "id": "ajson2",
                "parent": "ajson1",
                "text": "css",
                "state": {
                    "opened": true
                },
                "__uiNodeId": 2
            }, {
                "id": "ajson3",
                "parent": "ajson2",
                "text": "animate.css",
                "state": {
                    "opened": true
                },
                "type": "css",
                "__uiNodeId": 3
            },
            {
                "id": "ajson4",
                "parent": "ajson2",
                "text": "bootstrap.css",
                "state": {
                    "opened": true
                },
                "type": "css",
                "__uiNodeId": 4
            },
            {
                "id": "ajson5",
                "parent": "ajson2",
                "text": "style.css",
                "state": {
                    "opened": true
                },
                "type": "css",
                "__uiNodeId": 5
            },
            {
                "id": "ajson6",
                "parent": "ajson1",
                "text": "fonts",
                "state": {
                    "opened": false
                },
                "__uiNodeId": 6
            },
            {
                "id": "ajson9",
                "parent": "ajson6",
                "text": "glyphicons-halflings-regular.eot",
                "state": {
                    "opened": true
                },
                "type": "img",
                "__uiNodeId": 9
            },
            {
                "id": "ajson10",
                "parent": "ajson6",
                "text": "glyphicons-halflings-regular.svg",
                "state": {
                    "opened": true
                },
                "type": "svg",
                "__uiNodeId": 10
            },
            {
                "id": "ajson11",
                "parent": "ajson6",
                "text": "glyphicons-halflings-regular.ttf",
                "state": {
                    "opened": true
                },
                "type": "img",
                "__uiNodeId": 11
            },
            {
                "id": "ajson12",
                "parent": "ajson6",
                "text": "glyphicons-halflings-regular.woff",
                "state": {
                    "opened": true
                },
                "type": "img",
                "__uiNodeId": 12
            },
            {
                "id": "ajson7",
                "parent": "ajson1",
                "text": "img",
                "state": {
                    "opened": true
                },
                "__uiNodeId": 7
            },
            {
                "id": "ajson13",
                "parent": "ajson7",
                "text": "profile_small.jpg",
                "state": {
                    "opened": true
                },
                "type": "img",
                "__uiNodeId": 13
            },
            {
                "id": "ajson14",
                "parent": "ajson7",
                "text": "angular_logo.png",
                "state": {
                    "opened": true
                },
                "type": "img",
                "__uiNodeId": 14
            },
            {
                "id": "ajson15",
                "parent": "ajson7",
                "text": "html_logo.png",
                "state": {
                    "opened": true
                },
                "li_attr": {"class": "text-navy"},
                "type": "img",
                "__uiNodeId": 15
            },
            {
                "id": "ajson16",
                "parent": "ajson7",
                "text": "mvc_logo.png",
                "state": {
                    "opened": true
                },
                "li_attr": {"class": "text-navy"},
                "type": "img",
                "__uiNodeId": 16
            },
            {
                "id": "ajson8",
                "parent": "ajson1",
                "text": "js",
                "state": {
                    "opened": true
                },
                "__uiNodeId": 8
            },
            {
                "id": "ajson17",
                "parent": "ajson8",
                "text": "inspinia.js",
                "state": {
                    "opened": true
                },
                "type": "js",
                "__uiNodeId": 17
            },
            {
                "id": "ajson18",
                "parent": "ajson8",
                "text": "bootstrap.js",
                "state": {
                    "opened": true
                },
                "type": "js",
                "__uiNodeId": 18
            },
            {
                "id": "ajson19",
                "parent": "ajson8",
                "text": "jquery-2.1.1.js",
                "state": {
                    "opened": true
                },
                "type": "js",
                "__uiNodeId": 19
            },
            {
                "id": "ajson20",
                "parent": "ajson8",
                "text": "jquery-ui.custom.min.js",
                "state": {
                    "opened": true
                },
                "type": "js",
                "__uiNodeId": 20
            },
            {
                "id": "ajson21",
                "parent": "ajson1",
                "text": "affix.html",
                "type": "html",
                "__uiNodeId": 21
            },
            {
                "id": "ajson22",
                "parent": "ajson1",
                "text": "dashboard.html",
                "type": "html",
                "__uiNodeId": 22
            },
            {
                "id": "ajson23",
                "parent": "ajson1",
                "text": "buttons.html",
                "type": "html",
                "__uiNodeId": 23
            },
            {
                "id": "ajson24",
                "parent": "ajson1",
                "text": "calendar.html",
                "type": "html",
                "__uiNodeId": 24
            },
            {
                "id": "ajson25",
                "parent": "ajson1",
                "text": "contacts.html",
                "type": "html",
                "__uiNodeId": 25
            },
            {
                "id": "ajson26",
                "parent": "ajson1",
                "text": "css_animation.html",
                "type": "html",
                "__uiNodeId": 26
            },
            {
                "id": "ajson27",
                "parent": "ajson1",
                "text": "flot_chart.html",
                "type": "html",
                "__uiNodeId": 27
            },
            {
                "id": "ajson28",
                "parent": "ajson1",
                "text": "google_maps.html",
                "type": "html",
                "__uiNodeId": 28
            },
            {
                "id": "ajson29",
                "parent": "ajson1",
                "text": "icons.html",
                "type": "html",
                "__uiNodeId": 29
            },
            {
                "id": "ajson30",
                "parent": "ajson1",
                "text": "invoice.html",
                "type": "html",
                "__uiNodeId": 30
            },
            {
                "id": "ajson31",
                "parent": "ajson1",
                "text": "login.html",
                "type": "html",
                "__uiNodeId": 31
            }
        ]

    });