import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { GiReceiveMoney } from "@react-icons/all-files/gi/GiReceiveMoney";
import { GiMoneyStack } from "@react-icons/all-files/gi/GiMoneyStack";
import { GiPieChart } from "@react-icons/all-files/gi/GiPieChart";
import { FaPiggyBank } from "@react-icons/all-files/fa/FaPiggyBank";
import { BsGraphUp } from "@react-icons/all-files/bs/BsGraphUp";
import { AiOutlineAreaChart } from "@react-icons/all-files/ai/AiOutlineAreaChart";
import { MdDirectionsCar } from "@react-icons/all-files/md/MdDirectionsCar";
import { BsFillHouseDoorFill } from "@react-icons/all-files/bs/BsFillHouseDoorFill";

import PieChart from "../components/PieChart/PieChart";
import Card from "../components/Card/Card";

// import Table from "../components/Table/Table";
import Table from "../components/Table/Table_2";

import "../styles/dashboard.scss";

const getImage = graphql`
    {
        fixed: file(relativePath: { eq: "seedling3.png" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default function Dashboard() {
    const data = useStaticQuery(getImage);

    return (
        <div className="dashboard">
            <div className="dashboard__sidebar">
                <div style={{ position: "fixed", width: "260px" }}>
                    <div>
                        <Link className="dashboard__logo" to="/">
                            {/* <Img fixed={data.fixed.childImageSharp.fixed} /> */}
                            <h2 style={{ textAlign: "center", color: "white" }}>Cash Money</h2>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li className="active">
                                <GiPieChart
                                    style={{ marginRight: "10px" }}
                                    color="white"
                                    size="1.5em"
                                />
                                50/30/20
                            </li>
                            <li>
                                <MdDirectionsCar
                                    style={{ marginRight: "10px" }}
                                    color="#adb5bd"
                                    size="1.5em"
                                />
                                <span>Car Buying</span>
                            </li>
                            <li>
                                <BsFillHouseDoorFill
                                    style={{ marginRight: "10px" }}
                                    color="#adb5bd"
                                    size="1.5em"
                                />
                                Housing
                            </li>
                            <li>
                                <AiOutlineAreaChart
                                    style={{ marginRight: "10px" }}
                                    color="#adb5bd"
                                    size="1.5em"
                                />
                                Investing
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="dashboard__graph">
                <div style={{ display: "flex", justifyContent: "space-around" }}>
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
                </div>
                <div className="dashboard__piechart">
                    <PieChart />
                </div>
                <div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

// https://stackoverflow.com/questions/31970780/highcharts-pie-chart-specify-pie-slice-gradient-color
