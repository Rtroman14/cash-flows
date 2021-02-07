import React, { useContext } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import Author from "../Author/Author";

import "./PostPreview.scss";

import { PostContext } from "../../context/PostContext";

export default function Blog({ post }) {
    const { handleClickCategory } = useContext(PostContext);

    const excerpt = post._rawExcerpt[0].children[0].text;

    return (
        <article className="post">
            <div>
                <Link to={`/blog/${post.slug.current}`}>
                    <Img className="post__image" fluid={post.mainImage.asset.fluid} />
                </Link>
            </div>
            <div className="post__content">
                <div>
                    <p className="post__date">{post._createdAt}</p>
                </div>
                <div>
                    <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/blog/${post.slug.current}`}
                    >
                        <h4 className="post__title">{post.title}</h4>
                    </Link>
                </div>
                <div>
                    <p className="post__excerpt">
                        <p className="post__excerpt">{excerpt.substring(0, 400)}</p>
                    </p>
                </div>
                <Author authors={post.authors} dimensions="40px" />
                <div>
                    <span onClick={handleClickCategory} className="post__category">
                        {post.categories[0].title}
                    </span>
                </div>
            </div>
        </article>
    );
}
