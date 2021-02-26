import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import PieChart from "../components/PieChart/PieChart";

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
                <div>
                    <Link className="dashboard__logo" to="/">
                        {/* <Img fixed={data.fixed.childImageSharp.fixed} /> */}
                        <h2 style={{ textAlign: "center", color: "white" }}>Cash Money</h2>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li className="active">50/30/20 Rule</li>
                        <li>Car Buying Rule</li>
                        <li>Mortgage/Renting Rule</li>
                        <li>Investing</li>
                    </ul>
                </nav>
            </div>
            <div className="dashboard__graph">
                <PieChart />
            </div>
        </div>
    );
}

// https://stackoverflow.com/questions/31970780/highcharts-pie-chart-specify-pie-slice-gradient-color
