import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";

import { FinancialContext } from "../../context/FinancialContext";

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
    const { handleIncomeChange } = useContext(FinancialContext);

    const [values, setValues] = useState({ numberformat: amount });

    const handleChange = event => {
        setValues({
            ...values,
            // [event.target.name]: event.target.value,
            numberformat: event.target.value,
        });

        handleIncomeChange(event);

        // console.log(`${event.target.name} -- ${event.target.value}`);
    };

    return (
        <TextField
            variant="outlined"
            value={values.numberformat}
            onChange={handleChange}
            // onBlur={e => console.log(e.target.name)}
            disabled={!edit}
            name={name}
            InputProps={{
                inputComponent: NumberFormatCustom,
                style: { fontSize: 38, fontWeight: 600, color: "black" },
            }}
        />
    );
}

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import NumberFormat from "react-number-format";
// import TextField from "@material-ui/core/TextField";

// import { FinancialContext } from "../../context/FinancialContext";

// import "./Input.scss";

// function NumberFormatCustom(props) {
//     const { inputRef, onChange, ...other } = props;

//     return (
//         <NumberFormat
//             {...other}
//             getInputRef={inputRef}
//             onValueChange={values => {
//                 onChange({
//                     target: {
//                         name: props.name,
//                         value: values.value,
//                     },
//                 });
//             }}
//             thousandSeparator
//             isNumericString
//             prefix="$"
//         />
//     );
// }

// NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

// export default function Input({ amount, name, edit }) {
//     const [values, setValues] = useState({ numberformat: amount });

//     const handleChange = event => {
//         setValues({
//             ...values,
//             // [event.target.name]: event.target.value,
//             numberformat: event.target.value,
//         });

//         console.log(`${event.target.name} -- ${event.target.value}`);
//     };

//     return (
//         <TextField
//             // label="react-number-format"
//             variant="outlined"
//             value={values.numberformat}
//             onChange={handleChange}
//             onBlur={e => console.log(e)}
//             disabled={!edit}
//             name={name}
//             InputProps={{
//                 inputComponent: NumberFormatCustom,
//                 style: { fontSize: 38, fontWeight: 600, color: "black" },
//             }}
//         />
//     );
// }