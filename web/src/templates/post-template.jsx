import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PortableText from "../components/PortableText";

import Layout from "../components/layout";
import Author from "../components/Author/Author";

import "./post-template.scss";

export default function postTemplate({
    data: {
        post: { authors, categories, mainImage, publishedAt, title, _rawBody },
    },
}) {
    return (
        <Layout>
            <div>
                <Img style={{ height: "70vh" }} fluid={mainImage.asset.fluid} />
            </div>
            <div className="blog">
                <div className="blog__body">
                    <h1 className="blog__title">{title}</h1>
                    <PortableText blocks={_rawBody} />
                </div>
                <aside className="blog__meta">
                    <div className="blog__meta-date">{publishedAt}</div>
                    <div className="blog__meta-authors">
                        <h4>Authors</h4>
                        <Author authors={authors} dimensions="55px" />
                    </div>
                    <div>
                        <h4>Categors</h4>
                        <div>{categories[0].title}</div>
                    </div>
                </aside>
            </div>
            <div>
                <h1>You may also like</h1>
            </div>
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
            _rawBody(resolveReferences: { maxDepth: 5 })
        }
    }
`;
