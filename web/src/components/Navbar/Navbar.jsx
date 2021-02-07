import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Button from "@material-ui/core/Button";

import "./Navbar.scss";

const getImage = graphql`
    {
        fixed: file(relativePath: { eq: "seedling3.png" }) {
            childImageSharp {
                fixed(width: 80, height: 80) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default function Navbar({ height }) {
    const data = useStaticQuery(getImage);

    return (
        <nav className="navbar" style={{ height }}>
            <ul className="navbar__menu-items">
                <li>
                    <Link to="/">
                        <Img fixed={data.fixed.childImageSharp.fixed} />
                    </Link>
                </li>
                <li>
                    <Link to="/blog/">
                        <Button>Blog</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/">
                        <Button>Dashboard</Button>
                    </Link>
                </li>
            </ul>
            <ul className="navbar__menu-items">
                <li>
                    <Link to="/">
                        <Button>Login</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className="btn-cta" variant="contained" disableElevation>
                            Sign Up
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
