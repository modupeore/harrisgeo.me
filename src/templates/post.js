import React from "react"
import { graphql } from "gatsby"
import { Layout, Container } from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
