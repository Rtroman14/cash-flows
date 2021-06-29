import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Button from "@material-ui/core/Button";
import Typical from "react-typical";

import AreaChart from "../components/AreaChart/AreaChart";
import PostPreview from "../components/PostPreview/PostPreview";
import Layout from "../components/layout";
import Blurb from "../components/Blurb/Blurb";

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
        file: file(relativePath: { eq: "ben-franklin.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        allSanityPost(
            filter: {
                _id: {
                    in: [
                        "0109f007-67b1-4c0f-8c56-4ce375c4d60b"
                        "389d5816-2250-401a-a736-89592b6d2e52"
                        "a72a6c41-4371-4cb9-94b6-10526c8c7cff"
                    ]
                }
            }
        ) {
            nodes {
                mainImage {
                    asset {
                        fluid {
                            srcSet
                        }
                    }
                }
                title
                _id
                slug {
                    current
                }
                categories {
                    title
                }
                _createdAt(formatString: "MMMM DD, YYYY")
                authors {
                    author {
                        name
                        image {
                            asset {
                                fixed(height: 35, width: 35) {
                                    srcSet
                                }
                            }
                        }
                    }
                }
                _rawExcerpt
            }
        }
    }
`;

const Home = () => {
    const { site, allSanityPost, file } = useStaticQuery(getData);

    return (
        <Layout>
            <section
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
                        <Button size="large" className="btn-cta">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div style={{ width: "50%" }}>
                    <Investing style={{ width: "100%", height: "100%" }} />
                </div>
            </section>

            <section>
                <div style={{ display: "grid", justifyContent: "center", paddingBottom: "3em" }}>
                    <span className="lig__line"></span>
                    <div className="lig__number">1</div>
                    <h3 className="lig__word">Learn</h3>
                    <h4 className="lig__title">
                        Learn{" "}
                        {
                            <Typical
                                className="lig__title-highlight"
                                steps={["Where", 3000, "How", 3000, "Why", 3000]}
                                loop={Infinity}
                                wrapper="h4"
                            />
                        }
                        to grow your money
                    </h4>
                </div>
                <div className="lig__row">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <div style={{ paddingTop: "2em" }}>
                            <h2 className="title-secondary">
                                Learn From The Best Minds of Our Time
                            </h2>
                            <p style={{ padding: "1em 0 1.5em" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
                                mi vel dolor consectetur sollicitudin quis a odio. Fusce ornare
                                libero ut condimentum sagittis. Nulla non sagittis neque. Nulla
                                dapibus mauris purus, nec imperdiet felis fermentum consectetur.
                                Morbi sed tincidunt nisi.
                            </p>
                            <Link to="/blog" style={{ textDecoration: "none" }}>
                                <Button size="large" className="btn-cta">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="lig__row-grid">
                        {allSanityPost.nodes.map((node, index) => (
                            <div className={`lig__row-grid-item-${index}`}>
                                <PostPreview key={node._id} post={node} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div style={{ display: "grid", justifyContent: "center" }}>
                    <span className="lig__line"></span>
                    <div className="lig__number">2</div>
                    <h3 className="lig__word">Invest</h3>
                    <h4 className="lig__title">
                        Make your money <span className="lig__title-highlight">work for you</span>
                    </h4>
                    <div className="lig__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mi vel
                        dolor consectetur sollicitudin quis a odio. Fusce ornare libero ut
                        condimentum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </div>
                </div>
                <div style={{ padding: "0 8em" }}>
                    <AreaChart title="Investing $500/Month in the Market vs. Savings Account" />
                </div>
                <div className="columns-2 invest__blurbs">
                    <Blurb
                        title="Invest In Yourself"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                            sapiente delectus natus corrupti ex itaque vel corporis."
                    />
                    <Blurb
                        title="Multiple Income Sources"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                            sapiente delectus natus corrupti ex itaque vel corporis."
                    />
                    <Blurb
                        title="Think Longterm"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                            sapiente delectus natus corrupti ex itaque vel corporis."
                    />
                    <Blurb
                        title="Have Discipline"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                            sapiente delectus natus corrupti ex itaque vel corporis."
                    />
                </div>
            </section>

            <section>
                <div style={{ display: "grid", justifyContent: "center" }}>
                    <span className="lig__line"></span>
                    <div className="lig__number">3</div>
                    <h3 className="lig__word">Earn</h3>
                    <h4 className="lig__title">
                        Achieve <span className="lig__title-highlight">financial freedom</span>
                    </h4>
                    {/* <h4 className="lig__title">Compound your returns for financial freedom</h4> */}
                    {/* <h3 className="lig__word">Grow</h3>
                    <h4 className="lig__title">Compound your returns for financial freedom</h4> */}
                    {/* <h3 className="lig__word">Freedom</h3>
                    <h4 className="lig__title">Liberate yourself from financial burdens</h4> */}
                    <div className="lig__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel mi vel
                        dolor consectetur sollicitudin quis a odio. Fusce ornare libero ut
                        condimentum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
