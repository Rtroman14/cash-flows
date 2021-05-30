import React, { useState, useContext, useRef } from "react";

import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

import { FinancialContext } from "../../../context/finance/FinancialContext";

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

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function Cell({ value, id, setIsHover }) {
    const classes = useStyles();

    const { editCell, isBlur } = useContext(FinancialContext);

    const [cost, setCost] = useState(value);
    const [isSelect, setIsSelect] = useState(false);

    const node = useRef();

    const handleClick = event => {
        if (node.current.contains(event.target)) {
            // inside click
            return;
        }
        // outside click
        const inputValue = node.current.querySelector("input").value.replace(/[^0-9]/g, "");

        document.removeEventListener("mousedown", handleClick);

        setIsHover(false);
        setIsSelect(false);

        inputValue != cost && editCell(id, "cost", inputValue);

        console.log("inputValue =", inputValue);
        console.log("cost =", cost);
        console.log(inputValue == cost);
    };

    const handleSelect = () => {
        if (!isSelect) {
            setIsSelect(true);
            setIsHover(true);

            document.addEventListener("mousedown", handleClick);
            return () => {
                document.removeEventListener("mousedown", handleClick);
            };
        }
    };

    return (
        <TextField
            ref={node}
            className={`${classes.disabledInput} ${isSelect && classes.inputBorder} ${
                isBlur && "blur"
            }`}
            variant="outlined"
            value={cost}
            onChange={event => setCost(event.target.value)}
            disabled={!isSelect}
            onClick={() => handleSelect()}
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
        />
    );
}
