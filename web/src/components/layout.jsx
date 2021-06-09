import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function layout({ children }) {
    const height = "70px";

    return (
        <div>
            <Navbar />
            <main style={{ marginTop: height, padding: "0 7em" }}>{children}</main>
            <Footer />
        </div>
    );
}
