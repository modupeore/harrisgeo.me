import React, { useState } from "react"
import { graphql } from "gatsby"
import { Blogs } from "../components/Blogs"
import Main from "./main"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { Layout, Frame } from "../components/layout"
import GlobalStyles from "../components/globalStyles"

const IndexPage = ({ data }: any) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const { copy, blogs } = data
  const dataObject = {
    nav: {
      blog: copy.data.nav_blog[0].text,
      brand: copy.data.nav_brand[0].text,
      sun: copy.data.nav_icon_light.url,
      moon: copy.data.nav_icon_dark.url,
      home: copy.data.nav_home[0].text,
    },
    main: {
      title: copy.data.home_title[0].text,
      bio: copy.data.bio[0].text,
      profilePhoto: copy.data.image.url,
      currentJob: copy.data.current_job[0].text,
      currentJobLink: copy.data.current_job_link.url,
      currentJobLinkText: copy.data.current_job_link_text[0].text,
      github: copy.data.github.url,
      githubText: copy.data.github_text[0].text,
      githubImgLight: copy.data.github_icon_light.url,
      githubImgDark: copy.data.github_icon_dark.url,
      twitter: copy.data.twitter.url,
      twitterText: copy.data.twitter_text[0].text,
      twitterImgLight: copy.data.twitter_icon_light.url,
      twitterImgDark: copy.data.twitter_icon_dark.url,
    },
    blog: {
      title: copy.data.blog_title[0].text,
    },
  }

  const toggleDarkMode = () => {
    setDarkValue(!darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <Frame dark={darkMode}>
      <GlobalStyles />
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <Main {...dataObject.main} dark={darkMode} />
        <Blogs
          {...dataObject.blog}
          dark={darkMode}
          blogs={blogs}
          preview={true}
        />
      </Layout>
    </Frame>
  )
}

export const pageQuery = graphql`
  {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: DESC }
      limit: 3
    ) {
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
    copy: prismicTitle {
      data {
        nav_brand {
          text
        }
        nav_icon_light {
          url
        }
        nav_icon_dark {
          url
        }
        nav_home {
          text
        }
        nav_blog {
          text
        }
        home_title {
          text
        }
        image {
          url
        }
        bio {
          text
        }
        current_job {
          text
        }
        current_job_link_text {
          text
        }
        current_job_link {
          url
        }
        github_text {
          text
        }
        github {
          url
        }
        github_icon_dark {
          url
        }
        github_icon_light {
          url
        }
        twitter_text {
          text
        }
        twitter_icon_dark {
          url
        }
        twitter_icon_light {
          url
        }
        twitter {
          url
        }
        blog_title {
          text
        }
      }
    }
  }
`

export default IndexPage
