import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

export default function postTemplate({
    data: {
        post: { authors, categories, mainImage, publishedAt, title, _rawBody },
    },
}) {
    const paragraphs = _rawBody.map(paragraph => paragraph.children[0].text);

    const body = paragraphs.join("\n\n");

    return (
        <Layout>
            <div>
                <Img style={{ height: "60vh" }} fluid={mainImage.asset.fluid} />
            </div>
            <div>
                <div>{publishedAt}</div>
                <div style={{ paddingRight: "10px" }}>
                    <Img
                        style={{ borderRadius: "50%", display: "flex" }}
                        fixed={authors[0].author.image.asset.fixed}
                    />
                </div>
                <div>
                    <p style={{ fontSize: "14px", fontWeight: "300" }}>{authors[0].author.name}</p>
                </div>
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>{body}</div>
            <Link to="/blog">Back to blog page</Link>
        </Layout>
    );
}

export const query = graphql`
    query GetPost($slug: String) {
        post: sanityPost(slug: { current: { eq: $slug } }) {
            mainImage {
                asset {
                    fluid {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            title
            publishedAt(formatString: "MMMM DD, YYYY")
            categories {
                title
            }
            authors {
                author {
                    name
                    image {
                        asset {
                            fixed(height: 75, width: 75) {
                                ...GatsbySanityImageFixed
                            }
                        }
                    }
                }
            }
            _rawBody
        }
    }
`;
