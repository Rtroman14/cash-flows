import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import Row from "./Table_2/Row";

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

export default function Table(props) {
    const [tableData, setTableData] = useState(rowData);

    return (
        <table className="table">
            <thead>
                <tr style={{ backgroundColor: "#F2F2F2" }}>
                    <th></th>
                    <th>Expense</th>
                    <th>Cost</th>
                    <th>Category</th>
                    <th>% of Income</th>
                    <th>% of Category</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <Row row={row} key={index} />
                ))}
                <tr>
                    <td></td>
                    <td>
                        <Fab size="small" color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Categories</td>
                </tr>
            </tbody>
        </table>
    );
}

// https://www.youtube.com/watch?v=t2ypzz6gJm0
// https://material-ui.com/api/checkbox/

// https://material-ui.com/components/cards/ - for PostPreview component
