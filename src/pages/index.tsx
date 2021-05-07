import * as React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <p>It's not much, but it's mine</p>
      <p>
        Overly complicated simple blog built with{' '}
        <a href="//www.gatsbyjs.org/">Gatsby</a>
      </p>
      <Link style={{ boxShadow: `none` }} to={'/github'}>
        View Github Projects
      </Link>
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
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
      <hr />
      <p>Blogs, posts and other stuff I often reach for</p>
      <ul>
        <li>
          <a href="https://overreacted.io/">Dan Abramov</a>
        </li>
        <li>
          <a href="https://lucumr.pocoo.org/about/">Armin Ronacher</a>
        </li>
        <li>
          <a href="https://staffeng.com/stories/">
            Will Larson: Staff Engineering
          </a>
        </li>
        <li>
          <a href="https://lethain.com/">Will Larson: Blog</a>
        </li>
        <li>
          <a href="https://codeascraft.com/">Etsy Engineering Blog</a>
        </li>
        <li>
          <a href="https://netflixtechblog.com/">Netflix Engineering Blog</a>
        </li>
        <li>
          <a href="https://www.fast.ai/">Fast.ai</a>
        </li>
        <li>
          <a href="https://blog.codinghorror.com/">
            Coding Horror: Jeff Atwood
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://www.bitlog.com/2020/02/12/why-are-we-so-bad-at-software-engineering/">
            Why are we so bad at software engineering
          </a>
        </li>
        <li>
          <a href="https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/">
            What color is your function
          </a>
        </li>
        <li>
          <a href="https://blog.codinghorror.com/the-magpie-developer/">
            The Magpie Developer
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=_756Hsawbv4">
            A11y And React, Why Is It Important? - Johnny Bell - React Rally
            2019
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=sZPxFKRTW94">
            Human React - Brian Holt
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=AdNJ3fydeao">
            Rich Harris - Rethinking reactivity
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=wf-BqAjZb8M">
            Raymond Hettinger - Beyond PEP 8 -- Best practices for beautiful
            intelligible code - PyCon 2015
          </a>
        </li>
      </ul>
      <hr />
      <p>Reading List</p>
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
          <a href="https://www.relaynetwork.com/">
            I work at Relay Network doing Node, Angular and faking my way
            through Clojure.
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
