import React, { createContext, useState } from "react";

export const FinancialContext = createContext();

let data = [
    {
        id: 1,
        expense: "Rent",
        cost: 825,
        category: "Needs",
    },
    {
        id: 2,
        expense: "Renters Insurance",
        cost: 15,
        category: "Needs",
    },
    {
        id: 3,
        expense: "Car Loan",
        cost: 230,
        category: "Needs",
    },
    {
        id: 4,
        expense: "Car Insurance",
        cost: 130,
        category: "Needs",
    },
    {
        id: 5,
        expense: "Life Insurance",
        cost: 19,
        category: "Needs",
    },
    {
        id: 6,
        expense: "Internet",
        cost: 25,
        category: "Needs",
    },
    {
        id: 7,
        expense: "Utils",
        cost: 60,
        category: "Needs",
    },
    {
        id: 8,
        expense: "Haircut",
        cost: 40,
        category: "Needs",
    },
    {
        id: 9,
        expense: "Phone",
        cost: 75,
        category: "Needs",
    },
    {
        id: 10,
        expense: "Gas",
        cost: 100,
        category: "Needs",
    },
    {
        id: 11,
        expense: "Food",
        cost: 300,
        category: "Needs",
    },
    {
        id: 12,
        expense: "Roth IRA",
        cost: 500,
        category: "Savings",
    },
    {
        id: 13,
        expense: "Emergency Fund",
        cost: 200,
        category: "Savings",
    },
];

export function FinancialProvider(props) {
    const [tableData, setTable] = useState({
        allData: data,
        table: data,
    });

    const deleteRow = id => {
        const removedRow = tableData.allData.filter(row => row.id !== id);

        setTable({
            ...tableData,
            table: removedRow,
        });
    };

    const [needs, setNeeds] = useState({
        total: 1500,
        items: [],
    });
    const [wants, setWants] = useState({
        total: 2000,
        items: [],
    });
    const [savings, setSavings] = useState({
        total: 2000,
        items: [],
    });

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

    const filterByCategory = category => {
        const tableDataCategory = tableData.allData.filter(row => row.category === category);

        setTable({
            ...tableData,
            table: tableDataCategory,
        });
    };

    return (
        <FinancialContext.Provider
            value={{ needs, income, handleIncomeChange, tableData, deleteRow, filterByCategory }}
        >
            {props.children}
        </FinancialContext.Provider>
    );
}
