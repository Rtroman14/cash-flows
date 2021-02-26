import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const layout = ({ children }) => {
    const height = "70px";

    return (
        <div>
            <Navbar height={height} />
            <main style={{ marginTop: height }}>{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default layout;
