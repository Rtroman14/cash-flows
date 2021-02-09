import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "@material-ui/core/Button";

import Layout from "../components/layout";
import Investing from "../assets/investing.svg";

import "../styles/index.scss";
import "../styles/global.scss";

const getData = graphql`
    {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

const Home = () => {
    const {
        site: {
            siteMetadata: { title, description },
        },
    } = useStaticQuery(getData);

    return (
        <Layout>
            <section
                style={{
                    height: "80vh",
                    backgroundColor: "#F5F5F5",
                    display: "flex",
                    padding: "0 30em",
                }}
            >
                <div
                    style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        paddingBottom: "10em",
                    }}
                >
                    <h1 style={{ fontSize: "55px" }}>{title}</h1>
                    <p style={{ fontSize: "22px", fontWeight: "300" }}>{description}</p>
                    <Button className="cta-btn">Learn More</Button>
                </div>
                <div style={{ width: "50%" }}>
                    <Investing style={{ width: "40em" }} />
                </div>
            </section>
            <section style={{ height: "80vh" }}>
                <h1>Second section</h1>
            </section>
            <section style={{ height: "80vh", backgroundColor: "#F5F5F5" }}>
                <h1>Third section</h1>
            </section>
        </Layout>
    );
};

export default Home;
