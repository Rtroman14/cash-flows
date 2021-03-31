import React from "react";

import Tooltip from "@material-ui/core/Tooltip";

import "./Card.scss";

// export default function Card({ title, amount, icon, tooltip }) {
//     return (
//         <div className="card">
//             <div className="card__content" style={{ justifyContent: "space-between" }}>
//                 <div>
//                     <p style={{ fontSize: "16px", fontWeight: "500" }}>{title}</p>
//                     <h1 style={{ marginTop: "15px" }}>{amount}</h1>
//                 </div>
//                 <Tooltip title={tooltip} placement="top" arrow>
//                     <div className="card__icon">{icon}</div>
//                 </Tooltip>
//             </div>
//         </div>
//     );
// }

export default function Card({ title, amount, icon, tooltip }) {
    return (
        <div className="card">
            <div className="card__content" style={{ justifyContent: "space-between" }}>
                <div>
                    <h1 style={{ marginTop: "15px" }}>{amount}</h1>
                    <p style={{ fontSize: "14px", marginTop: "16px" }}>{title}</p>
                </div>
                <Tooltip title={tooltip} placement="top" arrow>
                    <div className="card__icon">{icon}</div>
                </Tooltip>
            </div>
            {/* <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    type="number"
                    value={5000}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            </form> */}
        </div>
    );
}
