import React, { useState, useContext } from "react";

import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

import { FinancialContext } from "../../../context/FinancialContext";

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

export default function Cell({ value, id, classes }) {
    const { editCell, isBlur } = useContext(FinancialContext);

    const [values, setValues] = useState({
        numberformat: value,
    });

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    let blur = {
        filter: "blur(0px)",
    };

    if (isBlur) {
        blur = {
            filter: "blur(5px)",
        };
    }

    return (
        <TextField
            className={classes}
            style={blur}
            variant="outlined"
            value={values.numberformat}
            onChange={handleChange}
            disabled={id === "leftoverWants"}
            onBlur={() => editCell(id, "cost", values.numberformat)}
            name="numberformat"
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
        />
    );
}
