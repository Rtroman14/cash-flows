import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
    Grid,
    Table,
    TableHeaderRow,
    TableInlineCellEditing,
    Toolbar,
} from "@devexpress/dx-react-grid-material-ui";

import { Plugin, Template, TemplatePlaceholder } from "@devexpress/dx-react-core";

const getRowId = row => row.id;

const EditPropsPanel = props => (
    <Plugin name="EditPropsPanel">
        <Template name="toolbarContent">
            <TemplatePlaceholder />
        </Template>
    </Plugin>
);

const FocusableCell = ({ onClick, ...restProps }) => (
    <Table.Cell {...restProps} tabIndex={0} onFocus={onClick} />
);

const initialRows = [
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
];

export default () => {
    const [columns] = useState([
        { name: "expense", title: "Expense" },
        { name: "cost", title: "Cost" },
        { name: "category", title: "Category" },
        { name: "percentIncome", title: "% of Income" },
        { name: "percentCategory", title: "% of Category" },
    ]);

    const [rows, setRows] = useState(initialRows);

    const [selectTextOnEditStart, setSelectTextOnEditStart] = useState(true);

    const commitChanges = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
            const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
            changedRows = [
                ...rows,
                ...added.map((row, index) => ({
                    id: startingAddedId + index,
                    ...row,
                })),
            ];
        }
        if (changed) {
            changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.id));
        }
        setRows(changedRows);
    };

    return (
        <Paper>
            <Grid rows={rows} columns={columns} getRowId={getRowId}>
                <EditingState onCommitChanges={commitChanges} />
                <Table cellComponent={FocusableCell} />
                <TableHeaderRow />
                <Toolbar />
                <EditPropsPanel
                    defaultAction="doubleClick"
                    isSelectText={selectTextOnEditStart}
                    changeSelectText={setSelectTextOnEditStart}
                />
                <TableInlineCellEditing
                    startEditAction="doubleClick"
                    selectTextOnEditStart={selectTextOnEditStart}
                />
            </Grid>
        </Paper>
    );
};
