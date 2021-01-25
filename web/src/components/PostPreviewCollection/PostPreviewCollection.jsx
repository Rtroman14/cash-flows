import React from "react";

import PostPreview from "../PostPreview/PostPreview";

import styles from "./PostPreviewCollection.module.scss";

const PostPreviewCollection = ({ posts, category, numPosts, handeShowMore }) => {
    const filteredPosts = posts
        .filter(node =>
            category === "All"
                ? node.categories[0].title !== category
                : node.categories[0].title === category
        )
        .filter((node, index) => index < numPosts)
        .map(node => <PostPreview key={node._id} post={node} />);

    return (
        <div>
            <div className={styles.collection}>{filteredPosts}</div>
        </div>
    );
};

export default PostPreviewCollection;
