import React, { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { data } from "./data";

export const FinancialContext = createContext();
const initialState = {
    table: data,
    sortCost: "",
};

export const actions = {
    ADD_ROW: "ADD_ROW",
    DELETE_ROW: "DELETE_ROW",
    EDIT_CELL: "EDIT_CELL",
};

const addRow = (row, state) => {
    const newRow = {
        id: uuidv4(),
        expense: row.expense,
        cost: Number(row.cost),
        category: row.category,
    };
    const newUserData = [...state.data, newRow];
    const updatedWants = updateWants(newUserData);

    return { ...state, data: updatedWants };
};

const deleteRow = (id, state) => {
    const removedRow = userData.data.filter(row => row.id !== id);
    const updatedWants = updateWants(removedRow);

    return { ...state, data: updatedWants };
};

const editCell = (id, field, newValue) => {
    const value = field === "cost" ? Number(newValue) : newValue;
    const editedRow = userData.data.map(row => (row.id === id ? { ...row, [field]: value } : row));
    const updatedWants = updateWants(editedRow);

    return { ...state, data: updatedWants };
};

const updateWants = newUserData => {
    const wantsCost =
        income.net -
        newUserData.filter(row => row.id !== "leftoverWants").reduce((a, b) => a + b.cost, 0);

    return newUserData.map(row => (row.id === "leftoverWants" ? { ...row, cost: wantsCost } : row));
};

export const userDataReducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_ROW:
            return addRow(action.row, state);
        case actions.DELETE_ROW:
            return deleteRow(action.id, state);
        case actions.EDIT_CELL:
            return editCell(action.id, action.field, action.newValue, state);
        default:
            return state;
    }
};
