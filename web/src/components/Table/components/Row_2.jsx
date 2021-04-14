import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import Select from "./Select";
import Input from "../../Input/Input";

import Cell from "./Cell";

// DISPLAY ALL CELLS IN ROW
export default function Row({ row }) {
    const [edit, setEdit] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleChange = event => {
        setChecked(event.target.checked);
    };

    const editRow = () => {
        setEdit(true);
    };

    return (
        <tr>
            <td>
                <Checkbox checked={checked} onChange={handleChange} />
            </td>
            <Cell value={row.name} type="text" edit={edit} />
            <Cell value={row.cost} type="number" edit={edit} />
            <td>{edit ? <Select currentCategory={row.category} /> : row.category}</td>
            <td>{row.percentIncome}%</td>
            <td>{row.percentCategory}%</td>
        </tr>
    );
}
