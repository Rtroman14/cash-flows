import React, { useContext } from "react";
import Button from "@material-ui/core/Button";

import { PostContext } from "../../context/PostContext";

export default function ShowMorePosts(props) {
    const { handeShowMorePosts } = useContext(PostContext);

    return (
        <div style={{ width: "100%" }}>
            <Button
                style={{
                    display: "block",
                    margin: "35px auto 35px auto",
                    backgroundColor: "#74c947",
                    color: "white",
                }}
                onClick={handeShowMorePosts}
                variant="contained"
                disableElevation
            >
                Show More
            </Button>
        </div>
    );
}
