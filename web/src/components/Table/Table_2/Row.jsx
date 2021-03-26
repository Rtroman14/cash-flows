import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import Select from "./Select";

import Cell from "./Cell";

// DISPLAY ALL CELLS IN ROW
export default function Row({ row, key }) {
    const [isHover, setIsHover] = useState(false);

    const handleHover = toggle => {
        setIsHover(toggle);
    };

    return (
        <tr>
            <td>
                <Checkbox />
            </td>
            <Cell value={row.name} type="text" />
            <Cell value={row.cost} type="number" />
            <td onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                {isHover ? <Select currentCategory={row.category} /> : row.category}
            </td>
            {/* <td>
                <Select currentCategory={row.category} />
            </td> */}
            <td>{row.percentIncome}%</td>
            <td>{row.percentCategory}%</td>
        </tr>
    );
}
