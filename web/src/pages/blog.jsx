import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PostPreviewCollection from "../components/PostPreviewCollection/PostPreviewCollection";
import Tabs from "../components/Tabs/Tabs";
import ShowMorePosts from "../components/ShowMorePosts/ShowMorePosts";
import Subscribe from "../components/Subscribe/Subscribe";

import { PostProvider } from "../context/PostContext";

const BlogPage = ({ data }) => {
    const { nodes } = data.allSanityPost;

    return (
        <Layout>
            <div style={{ width: "1340px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div style={{ width: "500px", margin: "35px 0" }}>
                        <h1>Cash Flows Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            suscipit sagittis risus, vel convallis purus dictum in. Nulla accumsan
                            id nibh eu auctor. Fusce non condimentum ipsum.
                        </p>
                    </div>
                    <Subscribe />
                </div>
                <PostProvider>
                    <Tabs />
                    <PostPreviewCollection nodes={nodes} />
                    <ShowMorePosts />
                </PostProvider>
                {/* SUBSCRIBE FOR MONTHLY NEWSLETTER WHICH SENDS YOU NEW POSTS YOU MISSED */}
            </div>
        </Layout>
    );
};

export const query = graphql`
    {
        allSanityPost(sort: { fields: _createdAt, order: DESC }) {
            nodes {
                mainImage {
                    asset {
                        fluid {
                            ...GatsbySanityImageFluid
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
                                    ...GatsbySanityImageFixed
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

export default BlogPage;
