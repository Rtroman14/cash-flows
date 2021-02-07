import React from "react";
import Img from "gatsby-image";

import "./Author.scss";

export default function Author({ authors, dimensions }) {
    return (
        <div className="author">
            <div style={{ paddingRight: "10px" }}>
                <Img
                    style={{
                        borderRadius: "50%",
                        display: "flex",
                        height: dimensions,
                        width: dimensions,
                    }}
                    fixed={authors[0].author.image.asset.fixed}
                />
            </div>
            <div>
                <p className="author__name">{authors[0].author.name}</p>
            </div>
        </div>
    );
}
