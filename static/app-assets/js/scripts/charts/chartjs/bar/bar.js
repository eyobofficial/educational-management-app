/*=========================================================================================
    File Name: bar.js
    Description: Chartjs bar chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Template
    Version: 2.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Bar chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#bar-chart");

    // Chart Options
    var chartOptions = {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide and green
        elements: {
            rectangle: {
                borderWidth: 1,
                borderColor: 'rgb(0, 255, 0)',
                borderSkipped: 'left'
            }
        },
        barThickness: 1,
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        legend: {
            position: 'bottom',
        },
        scales: {
            xAxes: [{
                display: true,
                fontWeight: 600,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false
                },
                scaleLabel: {
                    display: false,
                },
                ticks: {
                    beginAtZero:true,
                    max: 100,
                }
            }],
            yAxes: [{
                display: true,
                fontWeight: 600,
                barThickness: 40,
                categoryPercentage: 0.4,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false
                },
                scaleLabel: {
                    display: false,
                },
                ticks: {
                    beginAtZero:true,
                    max: 100
                }
            }]
        },
        title: {
            display: false,
            text: 'Current Subject Mark'
        }
    };

    // Chart Data
    var chartData = {
        labels: [""],
        datasets: [{
            label: "Student Mark",
            data: [65],
            backgroundColor: "#28D094",
            hoverBackgroundColor: "rgba(22,211,154,.9)",
            borderColor: "transparent"
        }, {
            label: "Subject Average Mark",
            data: [30],
            backgroundColor: "#F98E76",
            hoverBackgroundColor: "rgba(249,142,118,.9)",
            borderColor: "transparent"
        }]
    };

    var config = {
        type: 'horizontalBar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
});