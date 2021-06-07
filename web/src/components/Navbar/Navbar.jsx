import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { useLocation } from "@reach/router";

import Button from "@material-ui/core/Button";

import Logo from "../../assets/seedling.svg";

import "./Navbar.scss";

const getImage = graphql`
    {
        fixed: file(relativePath: { eq: "Logo.png" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default function Navbar() {
    const data = useStaticQuery(getImage);

    const { pathname } = useLocation();

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
    }, []);

    const pages = ["Blog", "Dashboard", "About"];

    return (
        <nav className={`navbar ${scroll && "navbar-scroll"}`}>
            <ul className="navbar__menu-items">
                <li>
                    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                        <Img fixed={data.fixed.childImageSharp.fixed} />
                        <h2 style={{ color: "#74c947", fontSize: "26px" }}>CashMoney</h2>
                    </Link>
                    {/* <Link to="/">
                        <Img fixed={data.fixed.childImageSharp.fixed} />
                    </Link> */}
                    {/* <Link to="/">
                        <Logo style={{ width: "70px", height: "70px" }} />
                    </Link> */}
                    {/* <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                        <Logo style={{ width: "70px", height: "70px" }} />
                        <h2>CashMoney</h2>
                    </Link> */}
                </li>
            </ul>
            <ul className="navbar__menu-items">
                {pages.map(page => (
                    <li
                        className={`navbar__menu-item ${
                            pathname.includes(page.toLowerCase()) && "navbar__menu-item-active"
                        }`}
                    >
                        <Link to={`/${page.toLowerCase()}/`}>{page}</Link>
                    </li>
                ))}
            </ul>
            <ul className="navbar__menu-items">
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/signup">
                        <Button className="btn-cta" variant="contained" disableElevation>
                            Sign Up
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
