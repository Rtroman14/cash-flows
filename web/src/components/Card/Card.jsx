import React from "react";

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
                <Tooltip title="Information" placement="top" arrow>
                    <div className="card__icon">{icon}</div>
                </Tooltip>
            </div>
        </div>
    );
}
