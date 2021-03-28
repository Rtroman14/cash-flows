import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            // margin: theme.spacing(1),
            // width: "25ch",
        },
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        // width: "25ch",
    },
}));

export default function Cell({ value, type, edit }) {
    const classes = useStyles();

    return (
        <>
            {edit ? (
                <td>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            // id="standard-basic"
                            type={type}
                            value={value}
                            fullWidth
                            InputProps={
                                type === "number" && {
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    ),
                                }
                            }
                        />
                    </form>
                </td>
            ) : (
                <td>
                    {type === "number" ? <span>$ </span> : null}
                    {value}
                </td>
            )}
        </>
    );
}
