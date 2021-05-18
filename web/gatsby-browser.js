import "./src/styles/global.scss";

import "@fontsource/baloo-2/400.css"; // Weight 500 with all styles included.
import "@fontsource/baloo-2/500.css"; // Weight 500 with all styles included.
import "@fontsource/baloo-2/600.css"; // Weight 500 with all styles included.

import "fontsource-montserrat"; // Defaults to weight 400 with all styles included.
import "fontsource-montserrat/100.css"; // Defaults to weight 400 with all styles included.
import "fontsource-montserrat/200.css"; // Defaults to weight 400 with all styles included.
import "fontsource-montserrat/300.css"; // Defaults to weight 400 with all styles included.
import "fontsource-montserrat/400.css"; // Defaults to weight 400 with all styles included.
import "fontsource-montserrat/500.css"; // Defaults to weight 400 with all styles included.
import "fontsource-montserrat/600.css"; // Defaults to weight 400 with all styles included.

import React from "react";

import { FinancialProvider } from "./src/context/finance/FinancialContext";

export const wrapRootElement = ({ element }) => <FinancialProvider>{element}</FinancialProvider>;
