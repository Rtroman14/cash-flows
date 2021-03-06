import React, { useContext } from "react";
import Button from "@material-ui/core/Button";

import { PostContext } from "../../context/post/PostContext";

import "./ShowMorePosts.scss";

export default function ShowMorePosts(props) {
    const { handeShowMorePosts } = useContext(PostContext);

    return (
        <div style={{ width: "100%", marginBottom: "5em" }}>
            <Button
                className="btn-cta btn-show-more"
                onClick={handeShowMorePosts}
                variant="contained"
                disableElevation
            >
                Show More
            </Button>
        </div>
    );
}
