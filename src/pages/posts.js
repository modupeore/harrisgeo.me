import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, H1 } from "../components/layout"
import Item from "../components/Item"
import styled from "styled-components"

const Block = styled.div`
  background: orange;
  height: 80px;
  width: calc(100% - 20px);
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 3px;
`

const Title = styled.a`
  color: black;
  text-decoration: none;
  font-size: 20px;
`

const Description = styled.div`
  font-size: 16px;
`

const Date = styled.div`
  font-size: 12px;
  font-style: italic;
  color: #777;
`

const Posts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
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
      <H1>THIS IS A BLOG</H1>
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

export default Posts
