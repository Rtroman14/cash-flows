/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Rating from "@material-ui/lab/Rating";
import { DataGrid } from "@material-ui/data-grid";

import Select from "./Select";

function renderRating(params) {
    return <Rating readOnly value={params.value} />;
}

function renderSelect(params) {
    return <Select value={params.row.category} />;
}

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        paddingRight: 16,
    },
});

function RatingEditInputCell(props) {
    const { id, value, api, field } = props;
    const classes = useStyles();

    const handleChange = useCallback(
        event => {
            const editProps = {
                value: Number(event.target.value),
            };

            api.commitCellChange({ id, field, props: editProps });
            api.setCellMode(id, field, "view");
        },
        [api, field, id]
    );

    return (
        <div className={classes.root}>
            <Rating value={Number(value)} onChange={handleChange} />
        </div>
    );
}

RatingEditInputCell.propTypes = {
    /**
     * GridApi that let you manipulate the grid.
     */
    api: PropTypes.any.isRequired,
    /**
     * The column field of the cell that triggered the event
     */
    field: PropTypes.string.isRequired,
    /**
     * The grid row id.
     */
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.number,
        PropTypes.object,
        PropTypes.string,
        PropTypes.bool,
    ]),
};

function renderRatingEditInputCell(params) {
    return <RatingEditInputCell {...params} />;
}

export default function RenderRatingEditCellGrid() {
    const [editRowsModel, setEditRowsModel] = useState({});

    const handleEditRowModelChange = useCallback(params => {
        setEditRowsModel(params.model);
    }, []);

    return (
        <div style={{ height: "400px", width: "100%" }}>
            <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
            <DataGrid
                rows={rows}
                columns={columns}
                editRowsModel={editRowsModel}
                onEditRowModelChange={handleEditRowModelChange}
            />
        </div>
    );
}

const columns = [
    {
        field: "names",
        headerName: "Names",
        width: 175,
        editable: true,
    },
    {
        field: "cost",
        headerName: "Cost",
        renderCell: renderRating,
        renderEditCell: renderRatingEditInputCell,
        editable: true,
        width: 180,
        type: "number",
    },
    {
        field: "category",
        headerName: "Category",
        renderCell: renderSelect,
        // renderEditCell: renderSelect,
        // editable: true,
        width: 120,
    },
];

const rows = [
    {
        id: 1,
        names: "Rent",
        cost: 4,
        category: "needs",
    },
    {
        id: 2,
        names: "Renters Insurance",
        cost: 4,
        category: "needs",
    },
    {
        id: 3,
        names: "Car Loan",
        cost: 4,
        category: "needs",
    },
    {
        id: 4,
        names: "Car Insurance",
        cost: 4,
        category: "needs",
    },
    {
        id: 5,
        names: "Life Insurance",
        cost: 4,
        category: "needs",
    },
    {
        id: 6,
        names: "Internet",
        cost: 4,
        category: "needs",
    },
    {
        id: 7,
        names: "Utils",
        cost: 4,
        category: "needs",
    },
    {
        id: 8,
        names: "Haircut",
        cost: 4,
        category: "needs",
    },
    {
        id: 9,
        names: "Phone",
        cost: 4,
        category: "needs",
    },
    {
        id: 10,
        names: "Gas",
        cost: 4,
        category: "needs",
    },
    {
        id: 11,
        names: "Food",
        cost: 4,
        category: "needs",
    },
    {
        id: 12,
        names: "Roth IRA",
        cost: 4,
        category: "savings",
    },
    {
        id: 13,
        names: "Emergency Fund",
        cost: 4,
        category: "savings",
    },
];
