const rowData = [
    {
        id: 1,
        name: "Rent",
        cost: 825,
        percentIncome: 25,
        percentCategory: 80,
    },
    {
        id: 2,
        name: "Renters Insurance",
        cost: 15,
        percentIncome: 5,
        percentCategory: 10,
    },
    {
        id: 3,
        name: "Car Loan",
        cost: 230,
        percentIncome: 15,
        percentCategory: 18,
    },
    {
        id: 4,
        name: "Car Insurance",
        cost: 150,
        percentIncome: 11,
        percentCategory: 13,
    },
];

let cells = [];

for (let key in rowData[0]) {
    key !== "id" && cells.push(rowData[0][key]);
}

cells.splice(2, 0, "Needs");

console.log(cells);
