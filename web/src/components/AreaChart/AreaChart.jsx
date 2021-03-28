import React from "react";

import Highcharts, { Point } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

require("highcharts/modules/exporting")(Highcharts);

let categories = [];
let savings = [0];
let market = [0];

const startAge = 25;
const retireAge = 65;
const numYears = retireAge - startAge;
const annualInvestment = 5000;
const MARKET_GAIN = 0.02;
const SAVINGS_GAIN = 0.002;

for (let age = startAge; age < retireAge; age++) {
    categories.push(age);
}

for (let year = 0; year < numYears; year++) {
    const totalSavings = savings.reduce((a, b) => a + b, 0);

    let capitalGains = Math.round(totalSavings * SAVINGS_GAIN);

    savings.push(annualInvestment + capitalGains + savings[year]);
}

for (let year = 0; year < numYears; year++) {
    const totalMarket = market.reduce((a, b) => a + b, 0);

    let capitalGains = Math.round(totalMarket * MARKET_GAIN);

    market.push(annualInvestment + capitalGains + market[year]);
}

const options = () => {
    return {
        chart: {
            type: "areaspline",
        },
        title: {
            text: "Investing Money in The Market vs. Savings Account",
        },
        subtitle: {
            text:
                "What are you waiting for? Invest now with <a href='https://www.acorns.com/invite/NB3R3H' target='_blank'>Acorns!</a>",
        },
        // legend: {
        //     layout: "vertical",
        //     align: "left",
        //     verticalAlign: "top",
        //     x: 150,
        //     y: 100,
        //     floating: true,
        //     borderWidth: 1,
        //     backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        // },
        xAxis: {
            categories,
            // plotBands: [
            //     {
            //         // visualize the weekend
            //         from: 4.5,
            //         to: 6.5,
            //         color: "rgba(68, 170, 213, .2)",
            //     },
            // ],

            title: {
                text: "Age",
            },
        },
        yAxis: {
            title: {
                text: "Investment Return",
            },
            // labels: {
            //     formatter: function () {
            //         return this.value / 1000 + "k";
            //     },
            // },
        },
        tooltip: {
            // formatter: function () {
            //     return this.points.reduce((s, point) => {
            //         console.log("S = ", s);
            //         console.log("Point = ", point);
            //         return s + "<br/>" + point.series.name + ": " + "$" + point.y;
            //     }, "<b>" + this.x + "</b>");
            // },
            shared: true,
            // valueSuffix: " Dollars",
            valuePrefix: "$",
            // pointFormat: "{series.name}: $<b>{point.y:,.0f}</b><br/>",
        },
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: false,
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.7,
            },
            series: {
                marker: {
                    symbol: "circle",
                    radius: 1,
                },
            },
        },
        series: [
            {
                name: "Market",
                data: market,
            },
            {
                name: "Savings",
                data: savings,
            },
        ],
    };
};

export default function AreaChart() {
    return <HighchartsReact highcharts={Highcharts} options={options()} />;
}

// https://signup.acorns.com/signup?tierPriceId=eb68d469-8bc2-4441-9f91-dbdc65013772&code=NB3R3H&s1=Referrals&referral_code=NB3R3H
// https://signup.acorns.com/signup?tierPriceId=eb68d469-8bc2-4441-9f91-dbdc65013772&code=NB3R3H&s1=Referrals&referral_code=NB3R3H
