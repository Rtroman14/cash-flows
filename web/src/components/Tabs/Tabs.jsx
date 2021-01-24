import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function CenteredTabs({ value, handleChange }) {
    return (
        <Paper>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Rules" />
                <Tab label="Investing" />
                <Tab label="Passive Income" />
            </Tabs>
        </Paper>
    );
}
