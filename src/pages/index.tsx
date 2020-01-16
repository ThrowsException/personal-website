import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

export default ({ data }) => {
  console.log(data);
  const posts = data.allMarkdownRemark.edges;
  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <p>It's not much, but it's mine</p>
      <p>
        Overally complicated simple blog built with{" "}
        <a href="//www.gatsbyjs.org/">Gatsby</a>
      </p>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </section>
          </article>
        );
      })}
      <hr />
      <ul>
        <li>
          <a href="https://github.com/ThrowsException">
            Github: ThrowsException
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/throwsexception">
            LinkedIn: ThrowsException
          </a>
        </li>
        <li>
          <a href="https://www.aweber.com">
            I work at AWeber, Working on Python and React.
          </a>
        </li>
      </ul>
      <div>
        <p>StackExchange</p>
        <a href="https://stackexchange.com/users/1239824">
          <img
            src="https://stackexchange.com/users/flair/1239824.png"
            width="208"
            height="58"
            alt="profile for ThrowsException on Stack Exchange, a network of free, community-driven Q&amp;A sites"
            title="profile for ThrowsException on Stack Exchange, a network of free, community-driven Q&amp;A sites"
          />
        </a>
      </div>
    </React.Fragment>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
