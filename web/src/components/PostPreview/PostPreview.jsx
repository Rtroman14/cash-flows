import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

import styles from "./PostPreview.module.scss";

const Blog = ({ post }) => {
    console.log(post);

    return (
        <article className={styles.blogContainer}>
            <div className={styles.imageContainer}>
                <Link to={`/blog/${post.slug.current}`}>
                    <Img fluid={post.mainImage.asset.fluid} />
                </Link>
            </div>
            <div className={styles.content}>
                <div>
                    <p className={styles.date}>{post._createdAt}</p>
                </div>
                <div>
                    <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/blog/${post.slug.current}`}
                    >
                        <h4 className={styles.title}>{post.title}</h4>
                    </Link>
                </div>
                <div>
                    <p className={styles.excerpt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan
                        dolor sed quam elementum porta. Sed risus nunc, commodo pulvinar iaculis
                        vel, interdum et augue. Curabitur tincidunt neque blandit metus feugiat
                        iaculis. Nunc eu rutrum dolor. Ut lectus lectus, ornare sed sem ac, cursus
                        auctor lectus.
                    </p>
                </div>
                <div className={styles.author}>
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
                    <span className={styles.category}>{post.categories[0].title}</span>
                </div>
            </div>
        </article>
    );
};

export default Blog;
