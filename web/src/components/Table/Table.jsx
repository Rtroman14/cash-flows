import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from "@material-ui/core/Chip";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import Row from "./components/Row";

import "./Table.scss";

const rowData = [
    {
        id: 1,
        name: "Rent",
        cost: 825,
        category: "Needs",
        percentIncome: 25,
        percentCategory: 80,
    },
    {
        id: 2,
        name: "Renters Insurance",
        cost: 15,
        category: "Needs",
        percentIncome: 5,
        percentCategory: 10,
    },
    {
        id: 3,
        name: "Car Loan",
        cost: 230,
        category: "Needs",
        percentIncome: 15,
        percentCategory: 18,
    },
    {
        id: 4,
        name: "Car Insurance",
        cost: 150,
        category: "Needs",
        percentIncome: 11,
        percentCategory: 13,
    },
];

export default function Table() {
    const [tableData, setTableData] = useState(rowData);

    const sortRows = field => {
        const sortedRows = rowData.sort((a, b) => {
            return b[field] - a[field];
        });

        setTableData([...sortedRows]);
    };

    const addNewRow = () => {
        let rows = tableData;

        const newRow = {
            id: tableData.length + 1,
            name: "",
            cost: "",
            category: "",
            percentIncome: "",
            percentCategory: "",
        };

        rows.push(newRow);

        setTableData([...rows]);
    };

    return (
        <table className="table">
            <thead>
                <tr style={{ backgroundColor: "#F2F2F2" }}>
                    <th></th>
                    <th>Expense</th>
                    <th onClick={() => sortRows("cost")}>
                        Cost
                        <ArrowDownwardIcon fontSize="inherit" />
                    </th>
                    <th>Category</th>
                    <th>% of Income</th>
                    <th>% of Category</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                    <Row row={row} key={row.id} />
                ))}
                <tr>
                    <td></td>
                    <td>
                        <Tooltip title="Add Row" placement="bottom" arrow>
                            <Fab onClick={addNewRow} size="small" color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div>
                            <Chip label="Needs" component="span" clickable variant="outlined" />
                            <Chip label="Wants" component="span" clickable variant="outlined" />
                            <Chip label="Savings" component="span" clickable variant="outlined" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

// https://www.youtube.com/watch?v=t2ypzz6gJm0
// https://material-ui.com/api/checkbox/

// https://material-ui.com/components/cards/ - for PostPreview component
