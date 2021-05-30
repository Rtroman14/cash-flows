const data = [
    {
        id: 1,
        name: "Rent",
        cost: 1000,
        category: "needs",
    },
    {
        id: 2,
        name: "Renters Insurance",
        cost: 15,
        category: "needs",
    },
    {
        id: 3,
        name: "Car Loan",
        cost: 230,
        category: "needs",
    },
    {
        id: 4,
        name: "Car Insurance",
        cost: 130,
        category: "needs",
    },
    {
        id: 5,
        name: "Life Insurance",
        cost: 19,
        category: "needs",
    },
    {
        id: 6,
        name: "Internet",
        cost: 25,
        category: "needs",
    },
    {
        id: 7,
        name: "Utils",
        cost: 60,
        category: "needs",
    },
    {
        id: 8,
        name: "Haircut",
        cost: 40,
        category: "needs",
    },
    {
        id: 9,
        name: "Phone",
        cost: 75,
        category: "needs",
    },
    {
        id: 10,
        name: "Gas",
        cost: 100,
        category: "needs",
    },
    {
        id: 11,
        name: "Food",
        cost: 300,
        category: "needs",
    },
    {
        id: 12,
        name: "Roth IRA",
        cost: 500,
        category: "savings",
    },
    {
        id: 13,
        name: "Emergency Fund",
        cost: 200,
        category: "savings",
    },
];

const userData = {
    data,
    category: "all",
    sortCost: "",
    income: {
        net: 4188,
        gross: 5833,
    },
};

const wants =
    userData.income.net - userData.data.reduce((a, b) => a + b.cost, 0);

console.log(wants);
