import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "@material-ui/core/Button";
import Typical from "react-typical";

import PostPreview from "../components/PostPreview/PostPreview";
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
        allSanityPost(
            filter: {
                _id: {
                    in: [
                        "0109f007-67b1-4c0f-8c56-4ce375c4d60b"
                        "389d5816-2250-401a-a736-89592b6d2e52"
                        "drafts.a72a6c41-4371-4cb9-94b6-10526c8c7cff"
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
    const { site, file, allSanityPost } = useStaticQuery(getData);

    console.log(allSanityPost.nodes);

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
                            {allSanityPost.nodes.map(node => (
                                <div>
                                    <PostPreview key={node._id} post={node} />
                                </div>
                            ))}
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
