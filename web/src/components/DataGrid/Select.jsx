import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    disabledSelect: {
        "& .MuiInputBase-root.Mui-disabled": {
            color: "black",
        },
    },
}));

export default function SimpleSelect({ value }) {
    const classes = useStyles();
    const [category, setCategory] = useState(value);

    const handleChange = event => {
        setCategory(event.target.value);
    };

    return (
        <FormControl
            variant="outlined"
            className={`${classes.formControl} ${classes.disabledSelect}`}
        >
            <Select
                // className={category === "needs" ? "needs" : "savings"}
                labelId="demo-simple-select-outlined-label"
                value={category}
                onChange={handleChange}
            >
                <MenuItem value="needs">Needs</MenuItem>
                <MenuItem value="wants">Wants</MenuItem>
                <MenuItem value="savings">Savings</MenuItem>
            </Select>
        </FormControl>
    );
}
