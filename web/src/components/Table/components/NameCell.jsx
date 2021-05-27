import React, { useState, useContext } from "react";

import { FinancialContext } from "../../../context/finance/FinancialContext";

import TextField from "@material-ui/core/TextField";

// FOCUS ON CLICK. BORDER STAYS. UNFOCUS ON CLICK OUTSIDE. BORDER DISAPPEARS

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    disabledInput: {
        "& .MuiInputBase-root.Mui-disabled": {
            color: "black",
        },
        "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "transparent",
        },
    },
    inputBorder: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            // borderColor: "transparent",
        },
        // "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        //     borderColor: "black",
        //     // borderColor: "transparent",
        // },
    },
}));

const NameCell = ({ name, id, hover }) => {
    const { editCell } = useContext(FinancialContext);

    const classes = useStyles();

    const [select, setSelect] = useState(false);
    const [focus, setFocus] = useState(false);

    const handleClickOutside = event => {
        console.log("onClickOutside() method called");
        console.log(event);
    };

    return (
        <TextField
            className={`${classes.disabledInput} ${select && classes.inputBorder}`}
            onBlur={event => {
                event.target.value !== name && editCell(id, "expense", event.target.value);
            }}
            variant="outlined"
            defaultValue={name}
            disabled={!select}
            onClick={() => {
                setSelect(true);
                hover();
            }}
            // inputRef={focus && (input => input && input.focus())}
            // autoFocus={focus}
        />
    );
};

export default NameCell;
