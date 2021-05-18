import React, { useState, useContext, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

import { FinancialContext } from "../../../context/finance/FinancialContext";

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

    const [cost, setCost] = useState(value);

    // useMemo??
    // useEffect(() => {
    //     setCost(value);
    //     console.log("Update value");
    // }, [value]);

    let blur = isBlur
        ? {
              filter: "blur(5px)",
          }
        : {
              filter: "blur(0px)",
          };

    return (
        <TextField
            className={classes}
            style={blur}
            variant="outlined"
            value={cost}
            onChange={event => setCost(event.target.value)}
            disabled={id === "leftoverWants"}
            onBlur={() => editCell(id, "cost", cost)}
            name="cellCost"
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
        />
    );
}
