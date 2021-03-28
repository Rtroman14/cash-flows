import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Select from "./Select";

import Cell from "./Cell";

// DISPLAY ALL CELLS IN ROW
export default function Row({ row }) {
    const [edit, setEdit] = useState(false);

    // const handleChange = event => {
    //     setChecked(event.target.checked);
    // };

    const editRow = () => {
        setEdit(true);
    };

    const escapeRow = event => {
        if (event.keyCode === 27) {
            setEdit(false);
        }
    };

    return (
        <tr>
            {/* <td>
                <Checkbox checked={checked} onChange={handleChange} />
            </td> */}
            <td>
                <IconButton onKeyDown={escapeRow} onClick={editRow} aria-label="edit">
                    <EditIcon fontSize="small" color="primary" />
                </IconButton>
            </td>
            <Cell value={row.name} type="text" edit={edit} />
            <Cell value={row.cost} type="number" edit={edit} />
            <td>{edit ? <Select currentCategory={row.category} /> : row.category}</td>
            <td>{row.percentIncome}%</td>
            <td>{row.percentCategory}%</td>
        </tr>
    );
}
