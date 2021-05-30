import React, { useContext, useState } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import CostCell from "./CostCell";
import Select from "./Select";
import NameCell from "./NameCell";

import "./Row.scss";

import { FinancialContext } from "../../../context/finance/FinancialContext";

export default function Row({ row }) {
    const { income, deleteRow } = useContext(FinancialContext);

    const [isHover, setIsHover] = useState(false);
    // const setHover = () => {
    //     setIsHover(!isHover);
    // };

    const incomePercentage = Number((row.cost / income.net) * 100).toFixed(1);

    return (
        <TableRow key={row.id} className={isHover && "row-hovered"}>
            <TableCell scope="row">
                <NameCell id={row.id} name={row.expense} setIsHover={setIsHover} />
            </TableCell>
            <TableCell align="center">
                <CostCell id={row.id} value={row.cost} setIsHover={setIsHover} />
            </TableCell>
            <TableCell align="center">
                <Select id={row.id} value={row.category} />
            </TableCell>
            <TableCell align="center">{incomePercentage}%</TableCell>
            <TableCell align="center">{incomePercentage}%</TableCell>
            <TableCell align="center">
                <IconButton
                    size="medium"
                    color="default"
                    onClick={() => deleteRow(row.id)}
                    aria-label="delete"
                    // disabled={row.id === "leftoverWants"}
                >
                    {/* <DeleteIcon fontSize="small" /> */}
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
