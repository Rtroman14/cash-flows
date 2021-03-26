import React, { useState, useRef, useEffect } from "react";
import ContentEditable from "react-contenteditable";

import Checkbox from "@material-ui/core/Checkbox";

import "./Table.scss";

const rowData = [
    {
        id: 1,
        name: "Rent",
        cost: 825,
        percentIncome: 25,
        percentCategory: 80,
    },
    {
        id: 2,
        name: "Renters Insurance",
        cost: 15,
        percentIncome: 5,
        percentCategory: 10,
    },
    {
        id: 3,
        name: "Car Loan",
        cost: 230,
        percentIncome: 15,
        percentCategory: 18,
    },
    {
        id: 4,
        name: "Car Insurance",
        cost: 150,
        percentIncome: 11,
        percentCategory: 13,
    },
];

export default function Table(props) {
    const [tableData, setTableData] = useState(rowData);

    // useEffect(() => {
    //     createTableRow(row);
    // }, [tableData]);

    const text = useRef("");

    const handleChange = evt => {
        text.current = evt.target.value;
    };

    const handleBlur = () => {
        console.log(text.current);
    };

    const handleFocus = evt => {
        console.log(evt.currentTarget.textContent);
    };

    const updateCell = (field, e, row) => {
        const updatedTableData = tableData.map(data =>
            data.id === row.id ? { ...data, [field]: e.currentTarget.textContent } : data
        );

        setTableData(updatedTableData);
    };

    const handleSort = () => {
        // sort by cost
        const sortedData = tableData.sort((a, b) => {
            return a.cost - b.cost;
        });

        setTableData(sortedData);
    };

    const createTableRow = row => (
        <tr key={row.id}>
            <td>
                <Checkbox onChange={() => console.log(row.id)} />
            </td>
            <td>
                <ContentEditable html={`${row.name}`} onChange={e => updateCell("name", e, row)} />
            </td>
            <td>
                <ContentEditable html={`${row.cost}`} onChange={e => updateCell("cost", e, row)} />
                {/* <ContentEditable
                    html={`$${row.cost}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                /> */}
            </td>
            <td>
                <div className="table__category">Needs</div>
            </td>
            <td>{row.percentIncome}%</td>
            <td>{row.percentCategory}%</td>
        </tr>
    );

    return (
        <table className="table">
            <thead>
                <tr style={{ backgroundColor: "#F2F2F2" }}>
                    <th style={{ width: "20px" }}></th>
                    <th style={{ width: "18em" }}>Expense</th>
                    <th onClick={handleSort}>Cost</th>
                    <th>Category</th>
                    <th>% of Income</th>
                    <th>% of Category</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => createTableRow(row))}
                <tr>
                    <td></td>
                    <td>Add Expense</td>
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
