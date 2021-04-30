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
        const displayTable =
            userData.category === "all"
                ? userData.data
                : userData.data.filter(row => row.category === userData.category);

        setTableData({
            ...tableData,
            table: displayTable,
        });

        updateCategories();

        setEmergencyFund(
            userData.data.filter(row => row.category === "needs").reduce((a, b) => a + b.cost, 0) *
                6
        );

        console.log(`userData changed!`);
    }, [userData, income]);

    const addRow = (expense, cost, category) => {
        const newRow = { id: uuidv4(), expense, cost: Number(cost), category };
        setUserData({
            ...userData,
            data: [...userData.data, newRow],
        });
    };

    const editCell = (id, field, newValue) => {
        let value = field === "cost" ? Number(newValue) : newValue;
        const editedRow = userData.data.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        );

        setUserData({
            ...userData,
            data: editedRow,
        });
    };

    const deleteRow = id => {
        const removedRow = userData.data.filter(row => row.id !== id);

        setUserData({
            ...userData,
            data: removedRow,
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

    const filterByCategory = category =>
        setUserData({
            ...userData,
            category,
        });

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

    useEffect(() => {
        setRetirementFund(income.gross * 0.1);

        console.log("Update emergency fund");
    }, [income]);

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

    // ------------ WANTS ------------ //

    const [wants, setWants] = useState({
        id: "leftoverWants",
        expense: "Wants",
        cost:
            income.net -
            userData.data.filter(row => row.id !== "leftoverWants").reduce((a, b) => a + b.cost, 0),
        category: "wants",
    });

    const updateWants = () => {
        const wantsSum =
            income.net -
            userData.data.filter(row => row.id !== "leftoverWants").reduce((a, b) => a + b.cost, 0);

        setWants({
            ...wants,
            cost: wantsSum,
        });
    };

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
