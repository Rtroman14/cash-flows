import React from "react";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

require("highcharts/modules/exporting")(Highcharts);

let categories = [];
let savings = [0];
let market = [0];

const startAge = 1;
const retireAge = 40;
const annualInvestment = 5000;
const MARKET_GAIN = 0.02;
const SAVINGS_GAIN = 0.002;

for (let i = startAge; i < retireAge; i++) {
    categories.push(i);
}

for (let year = 0; year < 40; year++) {
    const totalSavings = savings.reduce((a, b) => a + b, 0);

    let capitalGains = Math.round(totalSavings * SAVINGS_GAIN);

    savings.push(annualInvestment + capitalGains + savings[year]);
}

for (let year = 0; year < 40; year++) {
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
            text: "Money in savings account vs in the market",
        },
        legend: {
            layout: "vertical",
            align: "left",
            verticalAlign: "top",
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        },
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
        },
        yAxis: {
            title: {
                text: "Investment Return",
            },
        },
        tooltip: {
            shared: true,
            valueSuffix: " Dollars",
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5,
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
