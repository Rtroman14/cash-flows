import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PostPreviewCollection from "../components/PostPreviewCollection/PostPreviewCollection";
import TabPanel from "../components/TabPanel/TabPanel";
import Button from "@material-ui/core/Button";

const BlogPage = ({ data }) => {
    const { nodes } = data.allSanityPost;

    const [numPosts, setNumPosts] = useState(4);

    const handleChange = () => {
        setNumPosts(numPosts + 4);
    };

    return (
        <Layout>
            <h1>Blog Page!</h1>
            <TabPanel />
            <PostPreviewCollection posts={nodes} category="all" numPosts={numPosts} />
            <Button onClick={handleChange} variant="contained" disableElevation>
                Show More
            </Button>
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
