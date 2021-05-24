const data = [
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

const initialState = {
    data,
    wants: 0,
    category: "all",
    sortCost: "",
    income: {
        net: 4188,
        gross: 5833,
    },
};

console.log(initialState.wants);
