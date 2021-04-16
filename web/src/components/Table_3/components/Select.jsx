import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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
}));

export default function SimpleSelect({ value, add }) {
    const classes = useStyles();
    const [category, setCategory] = useState(value.toLowerCase());

    const [addCategory, setAddCategory] = useState(value);

    const handleChange = event => {
        setCategory(event.target.value);
    };

    const handleAddCategory = event => {
        setAddCategory(event.target.value);
    };

    return (
        <>
            {add ? (
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="addCategory">Category</InputLabel>
                    <Select
                        style={{ fontFamily: '"Montserrat", sans-serif', marginTop: "8px" }}
                        margin="dense"
                        labelId="addCategory"
                        value={addCategory}
                        onChange={handleAddCategory}
                    >
                        <MenuItem value="needs">Needs</MenuItem>
                        <MenuItem value="wants">Wants</MenuItem>
                        <MenuItem value="savings">Savings</MenuItem>
                    </Select>
                </FormControl>
            ) : (
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        // style={{ padding: "8px 8px 9px 0" }}
                        style={{ padding: "1.2em 1.5em 1.1em 0" }}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={category}
                        onChange={handleChange}
                    >
                        <MenuItem value="needs">Needs</MenuItem>
                        <MenuItem value="wants">Wants</MenuItem>
                        <MenuItem value="savings">Savings</MenuItem>
                    </Select>
                </FormControl>
            )}
        </>
    );
}
