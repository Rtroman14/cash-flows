import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import "../styles/dashboard.scss";

// import DashboardLayout from "../components/layout-dashboard";
import Layout from "../components/layout";

const getData = graphql`
    {
        file: file(relativePath: { eq: "dashboard.png" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default function Dashboard() {
    const { file } = useStaticQuery(getData);

    return (
        <Layout>
            <div className="test">
                <div className="test__test">
                    <Img fluid={file.childImageSharp.fluid} />
                </div>
                <p>Copy this: https://www.drone.io/</p>
                <p>Copy this: https://hlrlookup.flywheelsites.com/</p>
            </div>
        </Layout>
    );
}
