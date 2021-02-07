import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./Footer.scss";

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

export default function Footer() {
    const data = useStaticQuery(getImage);

    return (
        <footer className="footer">
            <div className="footer__nav">
                <div>
                    <Link to="/">
                        <Img fixed={data.fixed.childImageSharp.fixed} />
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
