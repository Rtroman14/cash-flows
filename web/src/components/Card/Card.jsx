import React from "react";
import IconButton from "@material-ui/core/IconButton";

import Tooltip from "@material-ui/core/Tooltip";

import "./Card.scss";

export default function Card({ title, amount, icon }) {
    return (
        <div className="card">
            <div className="card__content">
                <div>
                    <h1>{amount}</h1>
                    <p style={{ fontSize: "14px" }}>{title}</p>
                </div>
                {/* <IconButton aria-label="edit"> */}
                <Tooltip title="Information" placement="top" arrow>
                    <div className="card__icon">{icon}</div>
                </Tooltip>
                {/* </IconButton> */}
            </div>
        </div>
    );
}
