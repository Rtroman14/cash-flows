import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";

import { FinancialContext } from "../../context/finance/FinancialContext";

import "./Input.scss";

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

export default function Input({ amount, name, edit }) {
    const { isBlur, handleIncomeChange, leftoverMoney } = useContext(FinancialContext);

    const [value, setValue] = useState(amount);

    let blur = isBlur
        ? {
              filter: "blur(8px)",
          }
        : {
              filter: "blur(0px)",
          };

    return (
        <TextField
            variant="outlined"
            value={name === "leftoverMoney" ? leftoverMoney : value}
            onChange={event => setValue(event.target.value)}
            onBlur={handleIncomeChange}
            style={blur}
            disabled={!edit}
            name={name}
            InputProps={{
                inputComponent: NumberFormatCustom,
                style: { fontSize: 38, fontWeight: 600, color: "black" },
            }}
        />
    );
}
