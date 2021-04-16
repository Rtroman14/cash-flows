import React, { useState, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

import Row from "./components/Row";
import Dialog from "./components/Dialog";

import { FinancialContext } from "../../context/FinancialContext";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BudgetTable() {
    const { tableData, filterByCategory } = useContext(FinancialContext);

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table" dense>
                <TableHead>
                    <TableRow>
                        <TableCell>Expense</TableCell>
                        <TableCell align="center">Cost</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">% of Income</TableCell>
                        <TableCell align="center">% of Category</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.table.map(row => (
                        <Row row={row} />
                    ))}
                    <TableRow key="addRow">
                        <TableCell style={{ padding: "10px" }}>
                            <Dialog />
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell colSpan="2" style={{ textAlign: "center" }}>
                            {["All", "Needs", "Wants", "Savings"].map(category => (
                                <Chip
                                    label={category}
                                    component="span"
                                    clickable
                                    variant="outlined"
                                    onClick={() => filterByCategory(category)}
                                />
                            ))}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
