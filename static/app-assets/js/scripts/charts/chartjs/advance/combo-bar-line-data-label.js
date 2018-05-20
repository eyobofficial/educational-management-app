/*=========================================================================================
    File Name: combo-bar-line-data-label.js
    Description: Chartjs combo bar line data label chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Template
    Version: 2.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Combo bar line data label chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#combo-bar-line-data-label");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    // labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    // labelString: 'Value'
                }
            }]
        },
        title: {
            display: false,
            text: 'Chart.js Combo Bar Line data label Chart'
        },
        animation: {
            onComplete: function () {
                var chartInstance = this.chart;
                var ctx = chartInstance.ctx;
                ctx.textAlign = "center";

                Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    Chart.helpers.each(meta.data.forEach(function (bar, index) {
                        ctx.fillText(dataset.data[index], bar._model.x, bar._model.y - 10);
                    }),this);
                }),this);
            }
        }
    };

    // Chart Data
    var chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            type: 'line',
            label: "My Second dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "rgba(250,142,117,.5)",
            borderColor: "transparent",
            borderWidth: 2,
            pointBorderColor: "#FA8E75",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        },{
            type: 'bar',
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "#00A5A8",
            borderColor: "transparent",
            borderWidth: 2
        }, {
            type: 'bar',
            label: "My Third dataset - No bezier",
            data: [45, 25, 16, 36, 67, 18, 76],
            backgroundColor: "#F25E75",
            borderColor: "transparent",
            borderWidth: 2
        }]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);

});