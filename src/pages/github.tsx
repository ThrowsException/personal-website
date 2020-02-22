import * as React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';

export default ({ data }) => {
  const projects = data.github.viewer.itemShowcase.items.nodes;
  return (
    <Container>
      <h1>Github Portfolio</h1>
      <ul>
        {projects.map(({ id, name, url, languages }) => {
          return (
            <li key={id}>
              <h1 className="project-name">
                {name} <a href={url}>link</a>
              </h1>
              <ul>
                {languages.edges
                  .sort((a, b) => {
                    return b.size - a.size;
                  })
                  .map(({ node, size }) => {
                    return (
                      <li style={{ color: node.color }}>
                        {node.name}{' '}
                        {Math.round((size / languages.totalSize) * 100)}%
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export const query = graphql`
  query {
    github {
      viewer {
        itemShowcase {
          items(first: 100) {
            nodes {
              ... on GitHub_Repository {
                id
                name
                url
                languages(first: 10) {
                  edges {
                    node {
                      name
                      color
                    }
                    size
                  }
                  totalSize
                }
              }
            }
          }
        }
      }
    }
  }
`;
