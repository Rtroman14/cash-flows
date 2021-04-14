import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import Row from "./components/Row";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rowData = [
    {
        id: 1,
        expense: "Rent",
        cost: 825,
        category: "Needs",
        percentIncome: 25,
        percentCategory: 80,
    },
    {
        id: 2,
        expense: "Renters Insurance",
        cost: 15,
        category: "Needs",
        percentIncome: 5,
        percentCategory: 10,
    },
    {
        id: 3,
        expense: "Car Loan",
        cost: 230,
        category: "Needs",
        percentIncome: 15,
        percentCategory: 18,
    },
    {
        id: 4,
        expense: "Car Insurance",
        cost: 150,
        category: "Needs",
        percentIncome: 11,
        percentCategory: 13,
    },
    {
        id: 5,
        expense: "Gym",
        cost: 100,
        category: "Needs",
        percentIncome: 11,
        percentCategory: 13,
    },
];

export default function BudgetTable() {
    const classes = useStyles();

    const [tableData, setTableData] = useState(rowData);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Expense</TableCell>
                        <TableCell align="center">Cost</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">% of Income</TableCell>
                        <TableCell align="center">% of Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map(row => (
                        <Row key={row.id} row={row} />
                    ))}
                    <TableRow>
                        <TableCell style={{ padding: "10px" }}>
                            <Tooltip title="Add Row" placement="bottom" arrow>
                                <Fab
                                    // onClick={addNewRow}
                                    size="small"
                                    color="primary"
                                    aria-label="add"
                                >
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Chip
                                label="Needs"
                                component="span"
                                clickable
                                variant="outlined"
                                onClick={() => alert("Display this category")}
                            />
                            <Chip
                                label="Wants"
                                component="span"
                                clickable
                                variant="outlined"
                                onClick={() => alert("Display this category")}
                            />
                            <Chip
                                label="Savings"
                                component="span"
                                clickable
                                variant="outlined"
                                onClick={() => alert("Display this category")}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
