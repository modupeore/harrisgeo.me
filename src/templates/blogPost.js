import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, Container, Frame } from "../components/layout"
import { ProgressBar } from "../components/ProgressBar"
import Helmet from "react-helmet"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { H1, PostContainer } from "./blogPost.styles"

const BlogPost = ({ data }) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const [progress, setProgress] = useState(0)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    setDarkValue(!darkMode)
  }
  const { blog, prismic } = data

  const navData = {
    brand: "Back",
    sun: prismic.data.nav_icon_light.url,
    moon: prismic.data.nav_icon_dark.url,
  }
  return (
    <Frame
      dark={darkMode}
      onScroll={e => {
        const { scrollTop, scrollHeight, clientHeight } = e.target
        setProgress((scrollTop * 100) / (scrollHeight - clientHeight))
      }}
    >
      <ProgressBar progress={progress} />
      <Layout {...navData} dark={darkMode} toggleDarkMode={toggleDarkMode}>
        <Container dark={darkMode}>
          <Helmet
            title={`Harris Geo - ${blog.frontmatter.title}`}
            defer={false}
          />
          <H1>{blog.frontmatter.title}</H1>
          <PostContainer
            dark={darkMode}
            dangerouslySetInnerHTML={{ __html: blog.html }}
          />
        </Container>
      </Layout>
    </Frame>
  )
}

export const blogPostQuery = graphql`
  query($path: String) {
    blog: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
    prismic: prismicTitle {
      data {
        nav_icon_dark {
          url
        }
        nav_icon_light {
          url
        }
      }
    }
  }
`

export default BlogPost
