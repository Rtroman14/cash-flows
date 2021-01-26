import React from "react";
import { graphql } from "gatsby";
import Button from "@material-ui/core/Button";

import Layout from "../components/layout";
import PostPreviewCollection from "../components/PostPreviewCollection/PostPreviewCollection";
import Tabs from "../components/Tabs/Tabs";
import ShowMorePosts from "../components/ShowMorePosts/ShowMorePosts";

import { PostProvider } from "../context/PostContext";

const BlogPage = ({ data }) => {
    const { nodes } = data.allSanityPost;

    return (
        <Layout>
            <h1>Blog Page!</h1>
            <PostProvider>
                <Tabs />
                <PostPreviewCollection nodes={nodes} />
                <ShowMorePosts />
            </PostProvider>
            {/* SUBSCRIBE FOR MONTHLY NEWSLETTER WHICH SENDS YOU NEW POSTS YOU MISSED */}
        </Layout>
    );
};

export const query = graphql`
    {
        allSanityPost {
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
            }
        }
    }
`;

export default BlogPage;
