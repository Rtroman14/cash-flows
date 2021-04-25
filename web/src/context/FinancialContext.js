import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { data } from "./data";

export const FinancialContext = createContext();

export function FinancialProvider(props) {
    const [userData, setUserData] = useState(data);
    const [tableData, setTableData] = useState({
        table: data,
        category: "all",
        sortCost: "",
    });

    useEffect(() => {
        // if stall time when updating database before changes are reflected to interface then render loading component

        const displayTable =
            tableData.category === "all"
                ? userData
                : userData.filter(row => row.category === tableData.category);

        setTableData({
            ...tableData,
            table: displayTable,
        });

        console.log(`userData changed!`);
    }, [userData, tableData.category]);

    const [emergencyFund, setEmergencyFund] = useState(
        userData.filter(row => row.category === "needs").reduce((a, b) => a + b.cost, 0) * 6
    );

    const editCell = (id, field, newValue) => {
        let value = field === "cost" ? Number(newValue) : newValue;
        const editedRow = userData.map(row => (row.id === id ? { ...row, [field]: value } : row));

        setUserData(editedRow);
    };

    const deleteRow = id => {
        const removedRow = userData.filter(row => row.id !== id);

        setUserData(removedRow);
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
        setTableData({
            ...tableData,
            category,
        });
    };

    const addRow = (expense, cost, category) => {
        const newRow = { id: uuidv4(), expense, cost: Number(cost), category };
        setUserData([...userData, newRow]);
    };

    const [income, setIncome] = useState({
        net: 3580,
        gross: 5000,
    });

    const handleIncomeChange = event => {
        setIncome({
            ...income,
            [event.target.name]: Number(event.target.value),
        });
    };

    return (
        <FinancialContext.Provider
            value={{
                emergencyFund,
                income,
                handleIncomeChange,
                tableData,
                deleteRow,
                filterByCategory,
                sortRows,
                editCell,
                addRow,
            }}
        >
            {props.children}
        </FinancialContext.Provider>
    );
}
