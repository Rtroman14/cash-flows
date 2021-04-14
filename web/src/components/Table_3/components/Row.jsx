import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Cell from "./Cell";
import NumberCell from "./NumberCell";
import Select from "./Select";

import "./Row.scss";

export default function Row({ key, row }) {
    return (
        <TableRow key={key}>
            <Cell value={row.expense} />
            <NumberCell value={row.cost} />
            {/* <TableCell align="center">{row.category}</TableCell> */}
            <TableCell align="center">
                <Select value={row.category} />
            </TableCell>
            <TableCell align="center">{row.percentIncome}%</TableCell>
            <TableCell align="center">{row.percentCategory}%</TableCell>
        </TableRow>
    );
}
