import React, { createContext, useState } from "react";

export const FinancialContext = createContext();

export function FinancialProvider(props) {
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

    return (
        <FinancialContext.Provider value={{ needs, income, handleIncomeChange }}>
            {props.children}
        </FinancialContext.Provider>
    );
}
