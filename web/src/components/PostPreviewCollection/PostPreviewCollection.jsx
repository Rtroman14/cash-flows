import React from "react";

import PostPreview from "../PostPreview/PostPreview";

import styles from "./PostPreviewCollection.module.scss";

const PostPreviewCollection = ({ posts, category, numPosts }) => {
    const filteredPosts = posts
        .filter(node => node.categories[0].title !== category)
        .filter((node, index) => index < numPosts)
        .map(node => <PostPreview key={node._id} post={node} />);

    return <div className={styles.collection}>{filteredPosts}</div>;
};

export default PostPreviewCollection;
