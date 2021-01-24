import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PostPreviewCollection from "../components/PostPreviewCollection/PostPreviewCollection";
import TabPanel from "../components/TabPanel/TabPanel";
import Button from "@material-ui/core/Button";

const BlogPage = ({ data }) => {
    const { nodes } = data.allSanityPost;

    const [posts, setPosts] = useState({ numPosts: 4, category: "All" });

    const handleClick = () => {
        setPosts({ ...posts, numPosts: posts.numPosts + 4 });
    };

    return (
        <Layout>
            <h1>Blog Page!</h1>
            <TabPanel />
            <PostPreviewCollection posts={nodes} category="All" numPosts={posts.numPosts} />
            {nodes.length >= posts.numPosts && (
                <div style={{ width: "100%" }}>
                    <Button
                        style={{
                            display: "block",
                            margin: "35px auto",
                            backgroundColor: "#74c947",
                            color: "white",
                        }}
                        onClick={handleClick}
                        variant="contained"
                        disableElevation
                    >
                        Show More
                    </Button>
                </div>
            )}
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
