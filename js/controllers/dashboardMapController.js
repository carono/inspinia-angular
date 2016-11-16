angular
    .module('inspinia')
    .controller('dashboardMap', function () {
        var data = {
            "US": 298,
            "SA": 200,
            "DE": 220,
            "FR": 540,
            "CN": 120,
            "AU": 760,
            "BR": 550,
            "IN": 200,
            "GB": 120
        };

        this.data = data;
    });