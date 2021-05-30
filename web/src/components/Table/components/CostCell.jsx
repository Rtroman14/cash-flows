import React, { useState, useContext, useRef } from "react";

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

export default function Cell({ value, id, setIsHover }) {
    const { editCell, isBlur } = useContext(FinancialContext);

    const [cost, setCost] = useState(value);

    const [isSelect, setIsSelect] = useState(false);
    const node = useRef();

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setIsSelect(false);
        setIsHover(false);
        document.removeEventListener("mousedown", handleClick);
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
            className={isBlur && "blur"}
            variant="outlined"
            value={cost}
            onChange={event => setCost(event.target.value)}
            // disabled={!isSelect}
            onBlur={() => editCell(id, "cost", cost)}
            name="cellCost"
            onClick={() => {
                setIsHover(true);
                handleSelect();
            }}
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
        />
    );
}
