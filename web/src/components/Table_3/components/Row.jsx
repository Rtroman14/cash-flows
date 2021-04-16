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
    const { income, deleteRow } = useContext(FinancialContext);

    return (
        <TableRow key={row.id}>
            <TableCell scope="row">
                <TextField variant="outlined" defaultValue={row.expense} />
            </TableCell>
            <TableCell align="center">
                <NumberCell value={row.cost} />
            </TableCell>
            <TableCell align="center">
                <Select value={row.category} />
            </TableCell>
            <TableCell align="center">{(row.cost / income.gross) * 100}%</TableCell>
            <TableCell align="center">{(row.cost / income.gross) * 100}%</TableCell>
            <TableCell align="center">
                <IconButton
                    // size="small"
                    onClick={() => deleteRow(row.id)}
                    color="primary"
                    aria-label="delete"
                >
                    {/* <DeleteIcon fontSize="small" /> */}
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
