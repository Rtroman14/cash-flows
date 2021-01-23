import React from "react";
import Layout from "../components/layout";

import { useStaticQuery, graphql } from "gatsby";

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
            <section style={{ height: "80vh", backgroundColor: "#F5F5F5" }}>
                <h1>{title}</h1>
                <p>{description}</p>
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
