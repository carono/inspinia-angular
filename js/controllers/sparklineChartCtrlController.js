angular
    .module('inspinia')
    .controller('sparklineChartCtrl', function () {

        /**
         * Inline chart
         */
        var inlineData = [34, 43, 43, 35, 44, 32, 44, 52, 25];
        var inlineOptions = {
            type: 'line',
            lineColor: '#17997f',
            fillColor: '#1ab394'
        };

        /**
         * Bar chart
         */
        var barSmallData = [5, 6, 7, 2, 0, -4, -2, 4];
        var barSmallOptions = {
            type: 'bar',
            barColor: '#1ab394',
            negBarColor: '#c6c6c6'
        };

        /**
         * Pie chart
         */
        var smallPieData = [1, 1, 2];
        var smallPieOptions = {
            type: 'pie',
            sliceColors: ['#1ab394', '#b3b3b3', '#e4f0fb']
        };

        /**
         * Long line chart
         */
        var longLineData = [
            34,
            43,
            43,
            35,
            44,
            32,
            15,
            22,
            46,
            33,
            86,
            54,
            73,
            53,
            12,
            53,
            23,
            65,
            23,
            63,
            53,
            42,
            34,
            56,
            76,
            15,
            54,
            23,
            44
        ];
        var longLineOptions = {
            type: 'line',
            lineColor: '#17997f',
            fillColor: '#ffffff'
        };

        /**
         * Tristate chart
         */
        var tristateData = [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1];
        var tristateOptions = {
            type: 'tristate',
            posBarColor: '#1ab394',
            negBarColor: '#bfbfbf'
        };

        /**
         * Discrate chart
         */
        var discreteData = [4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7,];
        var discreteOptions = {
            type: 'discrete',
            lineColor: '#1ab394'
        };

        /**
         * Pie chart
         */
        var pieCustomData = [52, 12, 44];
        var pieCustomOptions = {
            type: 'pie',
            height: '150px',
            sliceColors: ['#1ab394', '#b3b3b3', '#e4f0fb']
        };

        /**
         * Bar chart
         */
        var barCustomData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7];
        var barCustomOptions = {
            type: 'bar',
            barWidth: 8,
            height: '150px',
            barColor: '#1ab394',
            negBarColor: '#c6c6c6'
        };

        /**
         * Line chart
         */
        var lineCustomData = [
            34,
            43,
            43,
            35,
            44,
            32,
            15,
            22,
            46,
            33,
            86,
            54,
            73,
            53,
            12,
            53,
            23,
            65,
            23,
            63,
            53,
            42,
            34,
            56,
            76,
            15,
            54,
            23,
            44
        ];
        var lineCustomOptions = {
            type: 'line',
            lineWidth: 1,
            height: '150px',
            lineColor: '#17997f',
            fillColor: '#ffffff'
        };


        /**
         * Definition of variables
         * Flot chart
         */
        this.inlineData = inlineData;
        this.inlineOptions = inlineOptions;
        this.barSmallData = barSmallData;
        this.barSmallOptions = barSmallOptions;
        this.pieSmallData = smallPieData;
        this.pieSmallOptions = smallPieOptions;
        this.discreteData = discreteData;
        this.discreteOptions = discreteOptions;
        this.longLineData = longLineData;
        this.longLineOptions = longLineOptions;
        this.tristateData = tristateData;
        this.tristateOptions = tristateOptions;
        this.pieCustomData = pieCustomData;
        this.pieCustomOptions = pieCustomOptions;
        this.barCustomData = barCustomData;
        this.barCustomOptions = barCustomOptions;
        this.lineCustomData = lineCustomData;
        this.lineCustomOptions = lineCustomOptions;
    });