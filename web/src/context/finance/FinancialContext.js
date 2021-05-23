import React, { createContext, useReducer, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { userDataReducer } from "./userDataReducer";
import { UPDATE_DATA, FILTER_BY_CATEGORY, UPDATE_INCOME } from "./actions";

import { data } from "../data";

export const FinancialContext = createContext();

export function FinancialProvider(props) {
    // ------------------ USERDATA ------------------ //
    const initialState = {
        data,
        category: "all",
        sortCost: "",
        income: {
            net: 4188,
            gross: 5833,
        },
    };

    const [userData, dispatch] = useReducer(userDataReducer, initialState);

    const addRow = row => {
        const newRow = {
            id: uuidv4(),
            expense: row.expense,
            cost: Number(row.cost),
            category: row.category,
        };
        const newUserData = [...userData.data, newRow];
        const updatedWants = updateWants(newUserData);

        dispatch({
            type: UPDATE_DATA,
            payload: updatedWants,
        });
    };

    const deleteRow = id => {
        const removedRow = userData.data.filter(row => row.id !== id);
        const updatedWants = updateWants(removedRow);

        dispatch({
            type: UPDATE_DATA,
            payload: updatedWants,
        });
    };

    const editCell = (id, field, newValue) => {
        const value = field === "cost" ? Number(newValue) : newValue;
        const editedRow = userData.data.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        );
        const updatedWants = updateWants(editedRow);

        dispatch({
            type: UPDATE_DATA,
            payload: updatedWants,
        });
    };

    const filterByCategory = category => {
        dispatch({
            type: FILTER_BY_CATEGORY,
            payload: category,
        });
    };

    const handleIncomeChange = event => {
        const newIncome = {
            ...userData.income,
            [event.target.name]: Number(event.target.value.replace(/[^0-9\.]+/g, "")),
        };

        dispatch({
            type: UPDATE_INCOME,
            payload: newIncome,
        });
    };

    // ------------------ TABLEDATA ------------------ //
    const [tableData, setTableData] = useState({
        table: data,
        sortCost: "",
    });

    const updateTableData = () => {
        const filteredTable =
            userData.category === "all"
                ? userData.data
                : userData.data.filter(row => row.category === userData.category);

        setTableData({
            ...tableData,
            table: filteredTable,
        });

        console.log("updateTableData ran");
    };

    const sortRows = () => {
        let sortCost;

        const sortedRows = tableData.table.sort((a, b) => {
            if (tableData.sortCost === "DESC" || "") {
                sortCost = "ASC";

                return b.cost - a.cost;
            }

            sortCost = "DESC";
            return a.cost - b.cost;
        });

        setTableData({
            ...tableData,
            sortCost,
            table: sortedRows,
        });
    };

    // ------------------ HELPER ------------------ //
    const updateWants = newUserData => {
        const wantsCost =
            userData.income.net -
            newUserData.filter(row => row.id !== "leftoverWants").reduce((a, b) => a + b.cost, 0);

        return newUserData.map(row =>
            row.id === "leftoverWants" ? { ...row, cost: wantsCost } : row
        );
    };

    // ------------------ EMERGENCY FUND ------------------ //
    const [emergencyFund, setEmergencyFund] = useState(
        userData.data.filter(row => row.category === "needs").reduce((a, b) => a + b.cost, 0) * 6
    );

    // ------------------ RETIREMENT FUND ------------------ //
    const [retirementFund, setRetirementFund] = useState((userData.income.gross * 0.1).toFixed());

    // ------------------ CATEGORIES ------------------ //
    const [categories, setCategories] = useState({
        needs: userData.data
            .filter(row => row.category === "needs")
            .reduce((a, b) => a + b.cost, 0),
        wants: userData.data
            .filter(row => row.category === "wants")
            .reduce((a, b) => a + b.cost, 0),
        savings: userData.data
            .filter(row => row.category === "savings")
            .reduce((a, b) => a + b.cost, 0),
    });

    const updateCategories = () =>
        setCategories({
            needs: userData.data
                .filter(row => row.category === "needs")
                .reduce((a, b) => a + b.cost, 0),
            wants: userData.data
                .filter(row => row.category === "wants")
                .reduce((a, b) => a + b.cost, 0),
            savings: userData.data
                .filter(row => row.category === "savings")
                .reduce((a, b) => a + b.cost, 0),
        });

    // ------------------ BLUR ------------------ //
    const [isBlur, setIsBlur] = useState(false);
    const toggleBlur = () => setIsBlur(!isBlur);

    // ------------------ useEFFECT ------------------ //
    useEffect(() => {
        const updatedWants = updateWants(userData.data);

        dispatch({
            type: UPDATE_DATA,
            payload: updatedWants,
        });

        console.log("useEffect []");
    }, []);

    useEffect(() => {
        updateTableData();

        setEmergencyFund(
            userData.data.filter(row => row.category === "needs").reduce((a, b) => a + b.cost, 0) *
                6
        );

        updateCategories();

        console.log("useEffect [userData, userData.income.net]");
    }, [userData, userData.income.net]);

    useEffect(() => {
        setRetirementFund((userData.income.gross * 0.1).toFixed());

        console.log("userData.income.gross]");
    }, [userData.income.gross]);

    return (
        <FinancialContext.Provider
            value={{
                addRow,
                deleteRow,
                editCell,
                filterByCategory,
                handleIncomeChange,
                userData,
                tableData,
                income: userData.income,
                emergencyFund,
                retirementFund,
                categories,
                isBlur,
                sortRows,
                toggleBlur,
            }}
        >
            {props.children}
        </FinancialContext.Provider>
    );
}
