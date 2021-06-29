import React from "react";
import "./Blurb.scss";

export default function Blurb({ image, title, description }) {
    return (
        <div className="blurb">
            {/* <Img /> */}
            <h3 className="blurb__title">{title}</h3>
            <p className="blurb__description">{description}</p>
        </div>
    );
}
