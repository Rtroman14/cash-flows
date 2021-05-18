import { v4 as uuidv4 } from "uuid";

import { ADD_ROW, DELETE_ROW, EDIT_CELL, FILTER_BY_CATEGORY, UPDATE_INCOME } from "./actions";

// add row
const addRow = (row, userData) => {
    const newRow = {
        id: uuidv4(),
        expense: row.expense,
        cost: Number(row.cost),
        category: row.category,
    };
    const newUserData = [...userData.data, newRow];
    const updatedWants = updateWants(newUserData, userData);

    return { ...userData, data: updatedWants };
};

// delete row
const deleteRow = (id, userData) => {
    const removedRow = userData.data.filter(row => row.id !== id);
    const updatedWants = updateWants(removedRow, userData);

    return { ...userData, data: updatedWants };
};

// edit cell
const editCell = (id, field, newValue, userData) => {
    const value = field === "cost" ? Number(newValue) : newValue;
    const editedRow = userData.data.map(row => (row.id === id ? { ...row, [field]: value } : row));
    const updatedWants = updateWants(editedRow, userData);

    return { ...userData, data: updatedWants };
};

const handleIncomeChange = (event, userData) => {
    const newIncome = {
        ...userData.income,
        [event.target.name]: Number(event.target.value.replace(/[^0-9\.]+/g, "")),
    };

    return { ...userData, income: newIncome };
};

const updateWants = (newUserData, userData) => {
    const wantsCost =
        userData.income.net -
        newUserData.filter(row => row.id !== "leftoverWants").reduce((a, b) => a + b.cost, 0);

    return newUserData.map(row => (row.id === "leftoverWants" ? { ...row, cost: wantsCost } : row));
};

// export const userDataReducer = (state, action) => {
//     switch (action.type) {
//         case ADD_ROW:
//             return addRow(action.payload, state);
//         case DELETE_ROW:
//             return deleteRow(action.payload, state);
//         case EDIT_CELL:
//             return editCell(action.payload, state);
//         case FILTER_BY_CATEGORY:
//             return { ...state, category: action.payload };
//         case UPDATE_INCOME:
//             return handleIncomeChange(action.payload, state);
//         default:
//             return state;
//     }
// };

export const userDataReducer = (state, action) => {
    switch (action.type) {
        case ADD_ROW:
            return { ...state, data: action.payload };
        case DELETE_ROW:
            return { ...state, data: action.payload };
        case EDIT_CELL:
            return { ...state, data: action.payload };
        case FILTER_BY_CATEGORY:
            return { ...state, category: action.payload };
        case UPDATE_INCOME:
            return { ...state, income: action.payload };
        default:
            return state;
    }
};

// trying to keep all userReducer / userData logic in this file
// but tricky b/c I need "updateWants" function which requires "income"
// trying to just send "dispatch" as context value

// https://github.com/academind/react-redux-vs-context/blob/context-hooks/src/context/GlobalState.js
// https://github.com/LloydJanseVanRensburg/Todo-List-Context-Project-/blob/master/src/context/todo-reducer.js
