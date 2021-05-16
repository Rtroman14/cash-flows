import { ADD_ROW, DELETE_ROW, EDIT_CELL } from "./actions";

export const userDataReducer = (state, action) => {
    switch (action.type) {
        case ADD_ROW:
            return { ...state, data: action.payload };
        case DELETE_ROW:
            return { ...state, data: action.payload };
        case EDIT_CELL:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
