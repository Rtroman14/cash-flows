import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "@material-ui/core/Button";
import Typical from "react-typical";

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
        file: file(relativePath: { eq: "Post.png" }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Home = () => {
    const { site, file } = useStaticQuery(getData);

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
                    <h1 style={{ fontSize: "55px", lineHeight: "1" }}>{site.siteMetadata.title}</h1>
                    <p style={{ fontSize: "22px", fontWeight: "300" }}>
                        {site.siteMetadata.description}
                    </p>
                    <div>
                        <Button className="btn-cta">Learn More</Button>
                    </div>
                </div>
                <div style={{ width: "50%" }}>
                    <Investing style={{ width: "100%", height: "100%" }} />
                </div>
            </section>
            <section className="section">
                <div style={{ display: "grid", justifyContent: "center" }}>
                    <span className="lig__line"></span>
                    <div className="lig__number">1</div>
                    <h3 className="lig__word">Learn</h3>
                    <h4 className="lig__title">
                        Learn{" "}
                        {
                            <Typical
                                steps={["Where", 3000, "Why", 3000, "How", 3000]}
                                loop={Infinity}
                                wrapper="h4"
                            />
                        }
                        to grow your money
                    </h4>
                    <div className="lig__row">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <div>
                                <h2 style={{ lineHeight: "1.2", paddingBottom: ".3em" }}>
                                    Learn From The Best Minds of Our Time
                                </h2>
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
                                mi vel dolor consectetur sollicitudin quis a odio. Fusce ornare
                                libero ut condimentum sagittis. Nulla non sagittis neque. Nulla
                                dapibus mauris purus, nec imperdiet felis fermentum consectetur.
                                Morbi sed tincidunt nisi.
                            </div>
                        </div>
                        <div className="lig__row-grid">
                            <div>
                                <Img fluid={file.childImageSharp.fluid} />
                            </div>
                            <div>
                                <Img fluid={file.childImageSharp.fluid} />
                            </div>
                            <div>
                                <Img fluid={file.childImageSharp.fluid} />
                            </div>
                            {/* <div>
                                <Img fluid={file.childImageSharp.fluid} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div style={{ display: "grid", justifyContent: "center" }}>
                    <span className="lig__line"></span>
                    <div className="lig__number">2</div>
                    <h3 className="lig__word">Invest</h3>
                    <h4 className="lig__title">Make your money work for you</h4>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mi vel
                        dolor consectetur sollicitudin quis a odio. Fusce ornare libero ut
                        condimentum sagittis.
                    </div>
                </div>
            </section>
            <section className="section">
                <div style={{ display: "grid", justifyContent: "center" }}>
                    <span className="lig__line"></span>
                    <div className="lig__number">3</div>
                    <h3 className="lig__word">Grow | Retire | Relax | Liberate | Freedom</h3>
                    <h4 className="lig__title">
                        Compound your investments for generational wealth
                    </h4>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mi vel
                        dolor consectetur sollicitudin quis a odio. Fusce ornare libero ut
                        condimentum sagittis.
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
