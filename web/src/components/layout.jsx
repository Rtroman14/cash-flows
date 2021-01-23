import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const layout = ({ children }) => {
    return (
        <div
            style={{
                width: "1340px",
                margin: "0 auto",
            }}
        >
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default layout;
