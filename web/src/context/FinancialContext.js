import React, { createContext, useState } from "react";

import { data } from "./data";

export const FinancialContext = createContext();

export function FinancialProvider(props) {
    const [userData, setUserData] = useState(data);
    const [tableData, setTableData] = useState({
        table: data,
        category: "All",
        sortCost: "",
    });
    const [emergencyFund, setEmergencyFund] = useState(
        userData.filter(row => row.category === "needs").reduce((a, b) => a + b.cost, 0) * 6
    );

    const editCell = (id, field, newValue) => {
        let value = field === "cost" ? Number(newValue) : newValue;

        const editedRow = tableData.table.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        );
        const editedRow2 = userData.map(row => (row.id === id ? { ...row, [field]: value } : row));

        setUserData(editedRow2);
        setTableData({
            ...tableData,
            table: editedRow,
        });
    };

    const deleteRow = id => {
        const removedRow = userData.filter(row => row.id !== id);
        const removedRow2 = tableData.table.filter(row => row.id !== id);

        setUserData(removedRow);

        setTableData({
            ...tableData,
            table: removedRow2,
        });
    };

    const sortRows = () => {
        let sortCost;

        const sortedRows = userData.sort((a, b) => {
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
        const showCategory =
            category === "all" ? userData : userData.filter(row => row.category === category);

        setTableData({
            ...tableData,
            category,
            table: showCategory,
        });
    };

    const addRow = () => {
        console.log("Add Row");
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
            }}
        >
            {props.children}
        </FinancialContext.Provider>
    );
}
