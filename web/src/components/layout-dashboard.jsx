import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import { GiPieChart } from "@react-icons/all-files/gi/GiPieChart";
import { AiOutlineAreaChart } from "@react-icons/all-files/ai/AiOutlineAreaChart";
import { MdDirectionsCar } from "@react-icons/all-files/md/MdDirectionsCar";
import { BsFillHouseDoorFill } from "@react-icons/all-files/bs/BsFillHouseDoorFill";

import "../styles/dashboard.scss";
import "../styles/global.scss";

import { FinancialProvider } from "../context/FinancialContext";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: ["'Baloo 2'"].join(","),
    },
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "12.5px",
                fontFamily: "inherit",
            },
        },
        MuiTableCell: {
            head: {
                fontSize: "17px",
            },
        },
        MuiTextField: {
            root: {
                width: "100%",
            },
        },
        MuiOutlinedInput: {
            input: {
                padding: "0",
            },
        },
        MuiSelect: {
            select: {
                paddingRight: "0",
            },
            outlined: {
                paddingRight: "0",
            },
        },
        MuiMenuItem: {
            root: {
                fontFamily: "inherit",
                fontSize: "15px",
            },
        },
    },
});

export default function DashboardLayout({ children }) {
    const location = useLocation();

    return (
        <div className="dashboard">
            <div className="dashboard__sidebar">
                <div style={{ position: "fixed", width: "260px" }}>
                    <div>
                        <Link className="dashboard__logo" to="/">
                            {/* <Img fixed={data.fixed.childImageSharp.fixed} /> */}
                            <h2 style={{ textAlign: "center", color: "white" }}>Cash Money</h2>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <Link style={{ textDecoration: "none" }} to="/dashboard/50-30-20">
                                <li
                                    className={
                                        location.pathname.includes("50-30-20") ? "active" : ""
                                    }
                                >
                                    <GiPieChart
                                        style={{ marginRight: "10px" }}
                                        color={
                                            location.pathname.includes("50-30-20")
                                                ? "white"
                                                : "#adb5bd"
                                        }
                                        size="1.5em"
                                    />
                                    50/30/20
                                </li>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/dashboard/car-buying">
                                <li
                                    className={
                                        location.pathname.includes("car-buying") ? "active" : ""
                                    }
                                >
                                    <MdDirectionsCar
                                        style={{ marginRight: "10px" }}
                                        color={
                                            location.pathname.includes("car-buying")
                                                ? "white"
                                                : "#adb5bd"
                                        }
                                        size="1.5em"
                                    />
                                    <span>Car Buying</span>
                                </li>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/dashboard/housing">
                                <li
                                    className={
                                        location.pathname.includes("housing") ? "active" : ""
                                    }
                                >
                                    <BsFillHouseDoorFill
                                        style={{ marginRight: "10px" }}
                                        color={
                                            location.pathname.includes("housing")
                                                ? "white"
                                                : "#adb5bd"
                                        }
                                        size="1.5em"
                                    />
                                    Housing
                                </li>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/dashboard/investing">
                                <li
                                    className={
                                        location.pathname.includes("investing") ? "active" : ""
                                    }
                                >
                                    <AiOutlineAreaChart
                                        style={{ marginRight: "10px" }}
                                        color={
                                            location.pathname.includes("investing")
                                                ? "white"
                                                : "#adb5bd"
                                        }
                                        size="1.5em"
                                    />
                                    Investing
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="dashboard__graph">
                <ThemeProvider theme={theme}>
                    <FinancialProvider>
                        <main>{children}</main>
                    </FinancialProvider>
                </ThemeProvider>
            </div>
        </div>
    );
}
