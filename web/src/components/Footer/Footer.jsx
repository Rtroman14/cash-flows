import React from "react";
import { Link } from "gatsby";

import Logo from "../../assets/seedling.svg";

import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__nav">
                <div>
                    <Link to="/">
                        <Logo style={{ width: "70px", height: "70px" }} />
                    </Link>
                </div>
                <div className="footer__nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/blog/">Blog</Link>
                    <Link to="/dashboard/">Dashboard</Link>
                </div>
            </div>
            <div className="footer__copyright">
                <p>COPYRIGHT © 2021, CASH FLOWS</p>
            </div>
        </footer>
    );
}
