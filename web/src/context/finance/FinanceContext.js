import React, { createContext } from "react";

export const FinanceContext = createContext();

export function FinanceProvider(props) {
    return (
        <FinanceContext.Provider value={{ message: "Hello from context" }}>
            {props.children}
        </FinanceContext.Provider>
    );
}
