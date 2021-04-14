import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";

export default function Cell({ value }) {
    return (
        <TableCell scope="row">
            <TextField variant="outlined" defaultValue={value} />
        </TableCell>
    );
}
