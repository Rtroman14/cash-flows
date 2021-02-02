exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query GetPosts {
            posts: allSanityPost {
                nodes {
                    slug {
                        current
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const projects = result.data.posts.nodes || [];
    projects.forEach((post, index) => {
        createPage({
            path: `/blog/${post.slug.current}`,
            component: require.resolve("./src/templates/post-template.jsx"),
            context: { slug: post.slug.current },
        });
    });
};
