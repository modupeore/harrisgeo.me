import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import { Layout, Container, Frame, Link } from "../Layout"
import { ProgressBar } from "../ProgressBar"
import { Helmet } from "react-helmet"
import { getDarkValue, setDarkValue } from "../../helpers/localStorage"
import {
  H1,
  PostContainer,
  Footer,
  P,
  TagWrapper,
  Tag,
} from "./BlogPost.styles"

export const blogPostQuery = graphql`
  query($path: String) {
    blog: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        tags
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

const BlogPost = (props: any) => {
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

  const splitTags = (tags: string): string[] =>
    tags.split(",").map((t) => t.replace(/ /g, ""))

  return (
    <Frame
      dark={darkMode}
      onScroll={(e: any) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target
        setProgress((scrollTop * 100) / (scrollHeight - clientHeight))
      }}
    >
      <Helmet>
        <title>{`Harris Geo - ${blog.frontmatter.title}`}</title>
      </Helmet>
      <ProgressBar progress={progress} />
      <Layout {...navData} dark={darkMode} toggleDarkMode={toggleDarkMode}>
        <Container dark={darkMode}>
          <H1>{blog.frontmatter.title}</H1>
          <PostContainer
            dark={darkMode}
            dangerouslySetInnerHTML={{ __html: blog.html }}
          />
          <Footer>
            <P>
              Date posted:&nbsp;<b>{blog.frontmatter.date}</b>
            </P>
            <TagWrapper>
              Tags:&nbsp;
              {splitTags(blog.frontmatter.tags).map((tag, i) => (
                <Tag
                  key={i}
                  dark={darkMode}
                  onClick={() => navigate(`/tags/${tag}`)}
                >
                  {tag}
                </Tag>
              ))}
            </TagWrapper>
            <P>{data.footer_questions}</P>
            {data.social_media.map(
              ({ social_text, social_name, social_link }: any, i: number) => (
                <P key={i}>
                  {social_text}&nbsp;
                  <Link dark={darkMode} target="_blank" href={social_link}>
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
