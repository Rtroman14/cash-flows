import React, { useContext } from "react";

import PostPreview from "../PostPreview/PostPreview";
import { PostContext } from "../../context/post/PostContext";

import "./PostPreviewCollection.scss";

const PostPreviewCollection = ({ nodes }) => {
    const { posts } = useContext(PostContext);

    const filteredPosts = nodes
        .filter(node =>
            posts.category === "All"
                ? node.categories[0].title !== posts.category
                : node.categories[0].title === posts.category
        )
        .filter((node, i) => i < posts[posts.category])
        .map(node => <PostPreview key={node._id} post={node} />);

    return (
        <div>
            <div className="collection">{filteredPosts}</div>
        </div>
    );
};

export default PostPreviewCollection;
