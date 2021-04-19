import React, { useContext } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import NumberCell from "./NumberCell";
import Select from "./Select";

import "./Row.scss";

import { FinancialContext } from "../../../context/FinancialContext";

export default function Row({ row }) {
    const { income, deleteRow, editCell } = useContext(FinancialContext);

    const incomePercentage = Number((row.cost / income.gross) * 100).toFixed(1);

    return (
        <TableRow key={row.id}>
            <TableCell scope="row">
                <TextField
                    onBlur={event => editCell(row.id, "expense", event.target.value)}
                    variant="outlined"
                    defaultValue={row.expense}
                />
            </TableCell>
            <TableCell align="center">
                <NumberCell id={row.id} value={row.cost} />
            </TableCell>
            <TableCell align="center">
                <Select id={row.id} value={row.category} />
            </TableCell>
            <TableCell align="center">{incomePercentage}%</TableCell>
            <TableCell align="center">{incomePercentage}%</TableCell>
            <TableCell align="center">
                <IconButton
                    // size="small"
                    color="default"
                    onClick={() => deleteRow(row.id)}
                    aria-label="delete"
                >
                    {/* <DeleteIcon fontSize="small" /> */}
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
