import React, { useContext } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import "./PostPreview.scss";

import { PostContext } from "../../context/PostContext";

export default function Blog({ post }) {
    const { handleClickCategory } = useContext(PostContext);

    const excerpt = post._rawExcerpt[0].children[0].text;

    console.log(`Post Title: ${post.title} --- Post Excerpt: ${excerpt}`);

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
                    <p className="post__excerpt">{excerpt}</p>
                </div>
                <div className="post__author">
                    <div style={{ paddingRight: "10px" }}>
                        <Img
                            style={{ borderRadius: "50%", display: "flex" }}
                            fixed={post.authors[0].author.image.asset.fixed}
                        />
                    </div>
                    <div>
                        <p style={{ fontSize: "14px", fontWeight: "300" }}>
                            {post.authors[0].author.name}
                        </p>
                    </div>
                </div>
                <div>
                    <span onClick={handleClickCategory} className="post__category">
                        {post.categories[0].title}
                    </span>
                </div>
            </div>
        </article>
    );
}
