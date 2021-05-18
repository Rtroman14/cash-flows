import React, { useContext } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import NumberCell from "./NumberCell";
import Select from "./Select";

import "./Row.scss";

import { FinancialContext } from "../../../context/finance/FinancialContext";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    disabledInput: {
        "& .MuiInputBase-root.Mui-disabled": {
            color: "black",
        },
        "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
    },
}));

export default function Row({ row }) {
    const { income, deleteRow, editCell } = useContext(FinancialContext);
    const classes = useStyles();

    const incomePercentage = Number((row.cost / income.net) * 100).toFixed(1);

    return (
        <TableRow key={row.id}>
            <TableCell scope="row">
                <TextField
                    className={classes.disabledInput}
                    onBlur={event => editCell(row.id, "expense", event.target.value)}
                    variant="outlined"
                    defaultValue={row.expense}
                    disabled={row.id === "leftoverWants"}
                />
            </TableCell>
            <TableCell align="center">
                <NumberCell id={row.id} value={row.cost} classes={classes.disabledInput} />
            </TableCell>
            <TableCell align="center">
                <Select id={row.id} value={row.category} />
            </TableCell>
            <TableCell align="center">{incomePercentage}%</TableCell>
            <TableCell align="center">{incomePercentage}%</TableCell>
            <TableCell align="center">
                <IconButton
                    // size="medium"
                    color="default"
                    onClick={() => deleteRow(row.id)}
                    aria-label="delete"
                    disabled={row.id === "leftoverWants"}
                >
                    {/* <DeleteIcon fontSize="small" /> */}
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
