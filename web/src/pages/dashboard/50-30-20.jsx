import React from "react";

import { GiReceiveMoney } from "@react-icons/all-files/gi/GiReceiveMoney";
import { GiMoneyStack } from "@react-icons/all-files/gi/GiMoneyStack";
import { FaPiggyBank } from "@react-icons/all-files/fa/FaPiggyBank";
import { BsGraphUp } from "@react-icons/all-files/bs/BsGraphUp";

import PieChart from "../../components/PieChart/PieChart";
import Card from "../../components/Card/Card";

import Table from "../../components/Table/Table";

import "../../styles/dashboard.scss";
import DashboardLayout from "../../components/layout-dashboard";

export default function BudgetPie() {
    return (
        <DashboardLayout>
            <div className="dashboard__graph-container">
                <Card
                    title="Gross Income"
                    amount="$5,000"
                    icon={<GiMoneyStack color="black" size="3em" />}
                />
                <Card
                    title="Net Income"
                    amount="$3,580"
                    icon={<GiReceiveMoney color="black" size="3em" />}
                />
                <Card
                    title="Emergency Fund"
                    amount="$5,800"
                    icon={<FaPiggyBank color="black" size="3em" />}
                />
                <Card
                    title="10% for Retirement"
                    amount="$500"
                    icon={<BsGraphUp color="black" size="2.5em" />}
                />
                <div className="dashboard__graph-piechart">
                    <PieChart />
                </div>
                <div className="dashboard__graph-table">
                    <Table />
                </div>
            </div>
        </DashboardLayout>
    );
}
