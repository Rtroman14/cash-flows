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

        console.log("useEffect []");
    }, []);

    useEffect(() => {
        updateTableData();

        setEmergencyFund(
            userData.data.filter(row => row.category === "needs").reduce((a, b) => a + b.cost, 0) *
                6
        );

        updateCategories();

        console.log("useEffect [userData]");
    }, [userData, income]);

    const addRow = (expense, cost, category) => {
        const newRow = { id: uuidv4(), expense, cost: Number(cost), category };
        const newUserData = [...userData.data, newRow];
        const updatedWants = updateWants(newUserData);

        setUserData({
            ...userData,
            data: updatedWants,
        });
    };

    const deleteRow = id => {
        const removedRow = userData.data.filter(row => row.id !== id);
        const updatedWants = updateWants(removedRow);

        setUserData({
            ...userData,
            data: updatedWants,
        });
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

    const filterByCategory = category => {
        setUserData({
            ...userData,
            category,
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

    useEffect(() => {
        setRetirementFund(income.gross * 0.1);
    }, [income.gross]);

    const [emergencyFund, setEmergencyFund] = useState(
        userData.data.filter(row => row.category === "needs").reduce((a, b) => a + b.cost, 0) * 6
    );
    const [retirementFund, setRetirementFund] = useState(income.gross * 0.1);

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
