import React, { useContext } from "react";

import { GiReceiveMoney } from "@react-icons/all-files/gi/GiReceiveMoney";
import { GiMoneyStack } from "@react-icons/all-files/gi/GiMoneyStack";
import { FaPiggyBank } from "@react-icons/all-files/fa/FaPiggyBank";
import { BsGraphUp } from "@react-icons/all-files/bs/BsGraphUp";

import PieChart from "../../components/PieChart/PieChart";
import Card from "../../components/Card/Card";

import Table3 from "../../components/Table_3/Table";

import "../../styles/dashboard.scss";
import DashboardLayout from "../../components/layout-dashboard";

import { FinancialContext } from "../../context/FinancialContext";

export default function BudgetPie(props) {
    const { needs, income } = useContext(FinancialContext);

    return (
        <DashboardLayout>
            <div className="dashboard__graph-budget">
                <Card
                    name="gross"
                    title="Gross Income"
                    amount={income.gross}
                    icon={<GiMoneyStack color="black" size="3.2em" />}
                    tooltip="Money before tax"
                    edit
                />
                <Card
                    name="net"
                    title="Net Income"
                    amount={income.net}
                    icon={<GiReceiveMoney color="black" size="3.2em" />}
                    tooltip="Money after tax"
                    edit
                />
                <Card
                    name="fund"
                    title="Emergency Fund"
                    amount={needs.total * 6}
                    icon={<FaPiggyBank color="black" size="3em" />}
                    tooltip="6 month's worth of expenses"
                    edit={false}
                />
                <Card
                    name="retirement"
                    title="10% for Retirement"
                    amount={income.gross * 0.1}
                    icon={<BsGraphUp color="black" size="2.5em" />}
                    tooltip="You want to retire, don't you?"
                    edit={false}
                />
                <div className="dashboard__graph-piechart">
                    <PieChart needs={50} wants={30} savings={20} />
                </div>
                <div className="dashboard__graph-table">
                    <Table3 />
                </div>
            </div>
        </DashboardLayout>
    );
}
