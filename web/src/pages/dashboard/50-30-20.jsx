import React, { useContext } from "react";

import { GiReceiveMoney } from "@react-icons/all-files/gi/GiReceiveMoney";
import { GiMoneyStack } from "@react-icons/all-files/gi/GiMoneyStack";
import { FaPiggyBank } from "@react-icons/all-files/fa/FaPiggyBank";
import { AiOutlineAreaChart } from "@react-icons/all-files/ai/AiOutlineAreaChart";

import PieChart from "../../components/PieChart/PieChart";
import Card from "../../components/Card/Card";

import Table from "../../components/Table/Table";

import "../../styles/dashboard.scss";
import DashboardLayout from "../../components/layout-dashboard";

import { FinancialContext } from "../../context/finance/FinancialContext";

export default function BudgetPie() {
    const { income, emergencyFund, retirementFund } = useContext(FinancialContext);

    return (
        <DashboardLayout>
            <div className="dashboard__graph-budget">
                <Card
                    key={income.gross}
                    name="gross"
                    title="Gross Income"
                    amount={income.gross}
                    icon={<GiMoneyStack color="#121a27" size="3.2em" />}
                    tooltip="Money before tax"
                    edit
                />
                <Card
                    key={income.net}
                    name="net"
                    title="Net Income"
                    amount={income.net}
                    icon={<GiReceiveMoney color="#121a27" size="3.2em" />}
                    tooltip="Money after tax"
                    edit
                />
                <Card
                    key={emergencyFund}
                    name="fund"
                    title="Emergency Fund"
                    amount={emergencyFund}
                    icon={<FaPiggyBank color="#121a27" size="3em" />}
                    tooltip="This amount should be in your savings account"
                    edit={false}
                />
                <Card
                    key={retirementFund}
                    name="retirement"
                    title="10% for Retirement"
                    amount={retirementFund}
                    icon={<AiOutlineAreaChart color="#121a27" size="3em" />}
                    tooltip="You want to retire, don't you?"
                    edit={false}
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
