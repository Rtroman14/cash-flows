import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            marginRight: theme.spacing(1),
        },
    },
}));

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[
                "(",
                /[1-9]/,
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
            ]}
            placeholderChar={"\u2000"}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

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

export default function FormattedInputs() {
    const classes = useStyles();
    const [values, setValues] = React.useState({ numberformat: "1320" });

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div
            style={{
                marginTop: "2em",
                width: " 260px",
                backgroundColor: "white",
                padding: "1.3em",
                boxShadow: "1px 2px 20px rgb(0 0 0 / 10%)",
                borderRadius: "8px",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div className={classes.root}>
                        <TextField
                            // label="react-number-format"
                            variant="outlined"
                            value={values.numberformat}
                            onChange={handleChange}
                            name="numberformat"
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                    </div>
                    <p style={{ fontSize: "14px", fontWeight: "500" }}>Net Income</p>
                </div>
                <div>Icon</div>
            </div>
        </div>
    );

    // return (
    //     <div className={classes.root}>
    //         <TextField
    //             // label="react-number-format"
    //             variant="outlined"
    //             value={values.numberformat}
    //             onChange={handleChange}
    //             name="numberformat"
    //             id="formatted-numberformat-input"
    //             InputProps={{
    //                 inputComponent: NumberFormatCustom,
    //             }}
    //         />
    //     </div>
    // );
}
