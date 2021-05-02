import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { data } from "./data";

export const FinancialContext = createContext();

export function FinancialProvider(props) {
    const [userData, setUserData] = useState({
        data,
        category: "all",
    });
    const [tableData, setTableData] = useState({
        table: data,
        sortCost: "",
    });

    useEffect(() => {
        const updatedWants = updateWants(userData.data);

        setUserData({
            ...userData,
            data: updatedWants,
        });

        updateTableData();
    }, []);

    const addRow = (expense, cost, category) => {
        const newRow = { id: uuidv4(), expense, cost: Number(cost), category };
        const newUserData = [...userData.data, newRow];
        const updatedWants = updateWants(newUserData);

        setUserData({
            ...userData,
            data: updatedWants,
        });

        updateTableData();
    };

    const deleteRow = id => {
        const removedRow = userData.data.filter(row => row.id !== id);
        const updatedWants = updateWants(removedRow);

        setUserData({
            ...userData,
            data: updatedWants,
        });

        updateTableData();
    };

    const editCell = (id, field, newValue) => {
        const value = field === "cost" ? Number(newValue) : newValue;
        const editedRow = userData.data.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        );
        const updatedWants = updateWants(editedRow);

        setUserData({
            ...userData,
            data: updatedWants,
        });

        updateTableData();
    };

    const updateWants = newUserData => {
        const wantsCost =
            income.net -
            newUserData.filter(row => row.id !== "leftoverWants").reduce((a, b) => a + b.cost, 0);

        return newUserData.map(row =>
            row.id === "leftoverWants" ? { ...row, cost: wantsCost } : row
        );
    };
    const updateTableData = () => {
        console.log("category", userData.category);
        const filteredTable = userData.data.filter(data => data.category === userData.category);

        console.log("filteredTable", filteredTable);

        setTableData({
            ...tableData,
            table: filteredTable,
        });
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

    const filterByCategory = category => {
        const filteredTable = userData.filter(data => data.category === category);

        setUserData({
            ...userData,
            category,
        });

        setTableData({
            ...tableData,
            table: filteredTable,
        });
    };

    const [income, setIncome] = useState({
        net: 3580,
        gross: 5000,
    });
    const handleIncomeChange = event => {
        setIncome({
            ...income,
            [event.target.name]: Number(event.target.value.replace(/[^0-9\.]+/g, "")),
        });
    };

    const [emergencyFund, setEmergencyFund] = useState(
        userData.data.filter(row => row.category === "needs").reduce((a, b) => a + b.cost, 0) * 6
    );
    const [retirementFund, setRetirementFund] = useState(income.gross * 0.1);

    // useEffect(() => {
    //     setRetirementFund(income.gross * 0.1);

    //     console.log("Update emergency fund");
    // }, [income]);

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

    // ------------ TOGGLE BLUR ------------ //

    const [isBlur, setIsBlur] = useState(false);
    const toggleBlur = () => setIsBlur(!isBlur);

    return (
        <FinancialContext.Provider
            value={{
                emergencyFund,
                retirementFund,
                income,
                categories,
                handleIncomeChange,
                tableData,
                userData,
                deleteRow,
                filterByCategory,
                sortRows,
                editCell,
                addRow,
                toggleBlur,
                isBlur,
            }}
        >
            {props.children}
        </FinancialContext.Provider>
    );
}

// ----- NOTES -----
// remove wants from userData list and make into own state
// on each update of userData, spread "wants" in

// update income or userData
// update wants
// set table
