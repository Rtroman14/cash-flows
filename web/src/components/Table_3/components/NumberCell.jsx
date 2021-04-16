import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

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

export default function Cell({ value, add }) {
    const [values, setValues] = useState({
        numberformat: value,
    });

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            {add ? (
                <TextField
                    variant="outlined"
                    onChange={handleChange}
                    margin="dense"
                    fullWidth
                    autoFocus
                    label="Cost"
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
            ) : (
                <TextField
                    variant="outlined"
                    value={values.numberformat}
                    onChange={handleChange}
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
            )}
        </>
    );
}
