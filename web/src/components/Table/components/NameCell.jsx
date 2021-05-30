import React, { useState, useContext, useRef } from "react";

import { FinancialContext } from "../../../context/finance/FinancialContext";

import TextField from "@material-ui/core/TextField";

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
        },
    },
}));

const NameCell = ({ name, id, setIsHover }) => {
    const [value, setName] = useState(name);

    const classes = useStyles();

    const { editCell } = useContext(FinancialContext);
    const [isSelect, setIsSelect] = useState(false);
    const node = useRef();

    const handleClick = event => {
        if (node.current.contains(event.target)) {
            // inside click
            return;
        }
        // outside click
        setIsSelect(false);
        setIsHover(false);
        document.removeEventListener("mousedown", handleClick);

        event.target.value !== value && editCell(id, "expense", value);
    };

    const handleSelect = () => {
        setIsSelect(true);

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    };

    return (
        <TextField
            ref={node}
            className={`${classes.disabledInput} ${isSelect && classes.inputBorder}`}
            // onBlur={event => {
            //     event.target.value !== value && editCell(id, "expense", value);
            // }}
            // onBlur={event => {
            //     event.target.value !== name && editCell(id, "expense", event.target.value);
            // }}
            variant="outlined"
            onChange={event => setName(event.target.value)}
            value={value}
            // defaultValue={name}
            disabled={!isSelect}
            onClick={() => {
                setIsHover(true);
                handleSelect();
            }}
        />
    );
};

export default NameCell;
