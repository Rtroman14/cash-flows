import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { userDataReducer } from "./reducers";
import { ADD_ROW, DELETE_ROW, EDIT_CELL } from "./actions";

import { data } from "../data";

export const FinanceContext = createContext();

export function FinanceProvider(props) {
    const initialState = {
        table: data,
        sortCost: "",
    };

    const [state, dispatch] = useReducer(userDataReducer, initialState);

    // add row
    const addRow = row => {
        const newRow = {
            id: uuidv4(),
            expense: row.expense,
            cost: Number(row.cost),
            category: row.category,
        };
        const newUserData = [...state.data, newRow];
        const updatedWants = updateWants(newUserData);

        dispatch({
            type: ADD_ROW,
            payload: updatedWants,
        });
    };

    // delete row
    const deleteRow = id => {
        const removedRow = userData.data.filter(row => row.id !== id);
        const updatedWants = updateWants(removedRow);

        dispatch({
            type: DELETE_ROW,
            payload: updatedWants,
        });
    };

    // edit cell
    const editCell = (id, field, newValue) => {
        const value = field === "cost" ? Number(newValue) : newValue;
        const editedRow = userData.data.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        );
        const updatedWants = updateWants(editedRow);

        dispatch({
            type: EDIT_CELL,
            payload: updatedWants,
        });
    };

    const updateWants = newUserData => {
        const wantsCost =
            income.net -
            newUserData.filter(row => row.id !== "leftoverWants").reduce((a, b) => a + b.cost, 0);

        return newUserData.map(row =>
            row.id === "leftoverWants" ? { ...row, cost: wantsCost } : row
        );
    };

    return (
        <FinanceContext.Provider value={{ addRow, deleteRow, editCell }}>
            {props.children}
        </FinanceContext.Provider>
    );
}
