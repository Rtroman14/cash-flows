import React, { useContext } from "react";
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
                className="section section-grey"
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
            <section className="section">
                <h1>Second section</h1>
            </section>
            <section className="section section-grey">
                <h1>Third section</h1>
            </section>
        </Layout>
    );
};

export default Home;
