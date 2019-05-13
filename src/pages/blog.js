import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, H1 } from "../components/layout"
import { Block, Title, Description, Date } from "../components/blog"

const Blog = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___id], order: DESC }) {
          edges {
            node {
              frontmatter {
                id
                path
                title
                description
                date
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <H1 id="blog">BLOG</H1>
      {allMarkdownRemark.edges.map(({ node }, i) => {
        return (
          <Block key={i}>
            <Title href={node.frontmatter.path}>{node.frontmatter.title}</Title>
            <Description>{node.frontmatter.description}</Description>
            <Date>{node.frontmatter.date}</Date>
          </Block>
        )
      })}
    </Container>
  )
}

export default Blog
