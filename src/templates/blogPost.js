import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, Container, Frame, Link } from "../components/layout"
import { ProgressBar } from "../components/ProgressBar"
import Helmet from "react-helmet"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { H1, PostContainer, Footer, P } from "./blogPost.styles"

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
        back
        icon_dark {
          url
        }
        icon_light {
          url
        }
        footer_questions
        social_media {
          social_text
          social_name
          social_link
        }
      }
    }
  }
`

const BlogPost = props => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const [progress, setProgress] = useState(0)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    setDarkValue(!darkMode)
  }
  const {
    blog,
    prismic: { data },
  } = props.data

  const navData = {
    brand: data.back,
    sun: data.icon_light.url,
    moon: data.icon_dark.url,
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
          <Footer>
            <P>{data.footer_questions}</P>
            {data.social_media.map(
              ({ social_text, social_name, social_link }, i) => (
                <P key={i}>
                  {social_text}&nbsp;
                  <Link target="_blank" href={social_link}>
                    {social_name}
                  </Link>
                </P>
              )
            )}
          </Footer>
        </Container>
      </Layout>
    </Frame>
  )
}

export default BlogPost
