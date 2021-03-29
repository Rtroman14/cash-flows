import React from "react";

import DashboardLayout from "../../components/layout-dashboard";

import AreaChart from "../../components/AreaChart/AreaChart";

export default function Investing() {
    return (
        <DashboardLayout>
            <div className="dashboard__graph-investing">
                <AreaChart />
            </div>
        </DashboardLayout>
    );
}

// age start investing?
// investment amount? (monthly or annual) - start with amount from 50/30/20
// age want to retire? give user monthly/annual investment amount needed
// desired amount at retirement? give user retirement age based off investment amount
