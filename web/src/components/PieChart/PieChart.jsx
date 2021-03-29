import React from "react";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import "./PieChart.scss";

require("highcharts/modules/exporting")(Highcharts);

const options = (needs, wants, savings) => {
    return {
        colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7,
                },
                stops: [
                    [0, color],
                    [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
                ],
            };
        }),
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            // backgroundColor: "rgba(0,0,0,0)",
        },
        title: {
            // text: "50/30/20 Rule",
            text: "",
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
            point: {
                valueSuffix: "%",
            },
        },
        plotOptions: {
            pie: {
                size: "100%",
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                    connectorColor: "silver",
                },
            },
            series: {
                // animation: {
                //     duration: 1000,
                // },
                events: {
                    click: function (event) {
                        alert(`Filter table to show: ${event.point.name}`);
                    },
                },
            },
        },
        series: [
            {
                name: "Income",
                data: [
                    { name: "Savings", y: savings },
                    { name: "Wants", y: wants },
                    { name: "Needs", y: needs },
                ],
            },
        ],
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: false,
        },
    };
};

export default function PieChart() {
    return <HighchartsReact highcharts={Highcharts} options={options(50, 30, 20)} />;
}

// https://stackoverflow.com/questions/31970780/highcharts-pie-chart-specify-pie-slice-gradient-color
