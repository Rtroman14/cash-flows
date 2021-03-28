import React from "react";

import DashboardLayout from "../../components/layout-dashboard";

import AreaChart from "../../components/AreaChart/AreaChart";
import AreaChart_2 from "../../components/AreaChart/AreaChart_2";

export default function Investing() {
    return (
        <DashboardLayout>
            <AreaChart_2 />
            <div style={{ padding: "1em" }}></div>
            <AreaChart />
        </DashboardLayout>
    );
}
