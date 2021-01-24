import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PostPreviewCollection from "../components/PostPreviewCollection/PostPreviewCollection";
import Button from "@material-ui/core/Button";

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";

import Tabs from "../components/Tabs/Tabs";

const BlogPage = ({ data }) => {
    const { nodes } = data.allSanityPost;

    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Layout>
            <h1>Blog Page!</h1>
            <Tabs value={value} handleChange={handleChange} />
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChange}
            >
                <PostPreviewCollection posts={nodes} category="Rules" numPosts={4} />
                <PostPreviewCollection posts={nodes} category="Investing" numPosts={4} />
                <PostPreviewCollection posts={nodes} category="Passive Income" numPosts={4} />
            </SwipeableViews>
            <div style={{ width: "100%" }}>
                <Button
                    style={{
                        display: "block",
                        margin: "0 auto 35px auto",
                        backgroundColor: "#74c947",
                        color: "white",
                    }}
                    // onClick={handleClick}
                    variant="contained"
                    disableElevation
                >
                    Show More
                </Button>
            </div>
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