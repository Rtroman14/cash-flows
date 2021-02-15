import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import PortableText from "../components/PortableText";

import Layout from "../components/layout";
import Author from "../components/Author/Author";
import RecommendedPosts from "../components/RecommendedPosts/RecommendedPosts";

import "./post-template.scss";

export default function postTemplate({
    data: {
        post: { authors, categories, mainImage, publishedAt, title, _rawBody },
    },
}) {
    const displayCategories = categories.map(category => <div>{category.title}</div>);
    return (
        <Layout>
            <div>
                <Img style={{ height: "75vh" }} fluid={mainImage.asset.fluid} />
            </div>
            <div className="blog">
                <div className="blog__body">
                    <h1 className="blog__title">{title}</h1>
                    <PortableText blocks={_rawBody} />
                </div>
                <aside className="blog__meta">
                    <div className="blog__meta-date">{publishedAt}</div>
                    <div className="blog__meta-author">
                        <h4>Author</h4>
                        <div style={{ padding: "1em 0 2em" }}>
                            <Author authors={authors} dimensions="55px" />
                        </div>
                    </div>
                    <div className="blog__meta-categories">
                        <h4>Categories</h4>
                        {displayCategories}
                    </div>
                </aside>
            </div>
            <RecommendedPosts categories={categories} currentTitle={title} />
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
