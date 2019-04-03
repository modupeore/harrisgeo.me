import React from "react"
import { graphql } from "gatsby"
import { Layout, Container, H1 } from "../components/layout"
import styled from "styled-components"
import Helmet from "react-helmet"

const PostContainer = styled.div`
  margin: 50px 0;
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout isLandingPage={false}>
      <Helmet title={`Harris Geo - ${post.frontmatter.title}`} defer={false} />

      <Container>
        <H1>{post.frontmatter.title}</H1>
        <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
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
