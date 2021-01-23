import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import styles from "./Navbar.module.scss";

import { useStaticQuery, graphql } from "gatsby";

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

const Navbar = props => {
    const data = useStaticQuery(getImage);

    return (
        <nav className={styles.navbar}>
            <ul className={styles.menuItems}>
                <li>
                    <Link to="/">
                        <Img fixed={data.fixed.childImageSharp.fixed} />
                    </Link>
                </li>
                <li>
                    <Link to="/blog/">
                        <Button style={{ color: "#74C947" }}>Blog</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/">
                        <Button style={{ color: "#74C947" }}>Dashboard</Button>
                    </Link>
                </li>
            </ul>
            <ul className={styles.menuItems}>
                <li>
                    <Link to="/">
                        <Button style={{ color: "#74C947" }}>Login</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={styles.ctaBtn} variant="contained" disableElevation>
                            Sign Up
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default withStyles(styles)(Navbar);
