import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function layout({ children, blog }) {
    const height = "70px";

    blog && console.log("BLOG PAGE");

    const padding = blog ? "0" : "0 7em";

    return (
        <>
            <Navbar />
            <main style={{ marginTop: height, padding }}>{children}</main>
            <Footer />
        </>
    );
}
