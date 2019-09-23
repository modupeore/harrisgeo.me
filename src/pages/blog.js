import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { Container, H1 } from "../components/layout"
import { Block, Title, Description, Date } from "../components/blog"

const Blog = ({ title, dark }) => {
  const { allMarkdownRemark } = useStaticQuery(blogQuery)

  const handleClick = node => {
    navigate(node.frontmatter.path)
  }

  return (
    <Container dark={dark} id="blog">
      <H1>{title}</H1>
      {allMarkdownRemark.edges.map(({ node }, i) => {
        return (
          <Block key={i} onClick={() => handleClick(node)} dark={dark}>
            <Title>{node.frontmatter.title}</Title>
            <Description>{node.frontmatter.description}</Description>
            <Date>{node.frontmatter.date}</Date>
          </Block>
        )
      })}
    </Container>
  )
}

export const blogQuery = graphql`
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

export default Blog
