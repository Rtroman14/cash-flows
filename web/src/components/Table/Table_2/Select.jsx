import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const categories = [
    {
        value: "Needs",
        label: "Needs",
    },
    {
        value: "Wants",
        label: "Wants",
    },
    {
        value: "Savings",
        label: "Savings",
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            // margin: theme.spacing(1),
            width: "100%",
        },
    },
}));

export default function MultilineTextFields({ currentCategory }) {
    const classes = useStyles();
    const [category, setCategory] = useState(currentCategory);

    const handleChange = event => {
        setCategory(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="standard-select-category"
                select
                value={category}
                onChange={handleChange}
            >
                {categories.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </form>
    );
}
