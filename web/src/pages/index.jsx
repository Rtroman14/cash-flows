import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "@material-ui/core/Button";

import Layout from "../components/layout";
import Investing from "../assets/investing.svg";

import "../styles/index.scss";

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
                className="section"
                style={{
                    display: "flex",
                }}
            >
                <div
                    style={{
                        width: "50%",
                        display: "grid",
                        gap: "25px",
                        justifyContent: "center",
                        height: "min-content",
                        paddingTop: "9em",
                    }}
                >
                    <h1 style={{ fontSize: "55px", lineHeight: "1" }}>{title}</h1>
                    <p style={{ fontSize: "22px", fontWeight: "300" }}>{description}</p>
                    <div>
                        <Button className="btn-cta">Learn More</Button>
                    </div>
                </div>
                <div style={{ width: "50%" }}>
                    <Investing style={{ width: "100%", height: "100%" }} />
                </div>
            </section>
            <section className="section section-grey">
                <h1>Second section</h1>
                <div style={{ display: "grid", justifyContent: "center" }}>
                    <span
                        style={{
                            height: "100px",
                            width: "1px",
                            backgroundColor: "green",
                            alignSelf: "center",
                        }}
                    ></span>
                    <div style={{ height: "50px", width: "50px", backgroundColor: "green" }}>1</div>
                    <h3>Learn</h3>
                    <div>
                        <h4>Learn Where|Why|How to grow your money</h4>
                    </div>
                </div>
            </section>
            <section className="section">
                <h1>Third section</h1>
            </section>
        </Layout>
    );
};

export default Home;
