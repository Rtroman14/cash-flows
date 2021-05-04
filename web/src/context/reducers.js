export const actions = {
    ADD_ROW: "ADD_ROW",
    DELETE_ROW: "DELETE_ROW",
    EDIT_CELL: "EDIT_CELL",
};

const addRow = (row, data) => {
    const newRow = {
        id: uuidv4(),
        expense: row.expense,
        cost: Number(row.cost),
        category: row.category,
    };
    const newUserData = [...data, newRow];
    const updatedWants = updateWants(newUserData);

    // setUserData({
    //     ...userData,
    //     data: updatedWants,
    // });

    return updatedWants;
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
    const editedRow = userData.data.map(row => (row.id === id ? { ...row, [field]: value } : row));
    const updatedWants = updateWants(editedRow);

    setUserData({
        ...userData,
        data: updatedWants,
    });
};

export const userDataReducer = (state, action) => {
    switch (action.type) {
        case ADD_ROW:
            return addRow(expense, cost, categor, state.data);
        case DELETE_ROW:
            return;
        case EDIT_CELL:
            return;
        default:
            return state;
    }
};

// https://youtu.be/R_7XRX7nLsw?t=934
