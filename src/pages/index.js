import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Blog from "./blog"
import Main from "./main"
import { Layout, Frame } from "../components/layout"

const IndexPage = props => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    setDarkMode(window.localStorage.getItem("dark") === "true" ? true : false)
  }, [])

  const {
    data: {
      prismicTitle: { data },
    },
  } = props

  const dataMap = {
    nav: {
      blog: data.nav_blog.text,
      brand: data.nav_brand.text,
      sun: data.nav_icon_light.url,
      moon: data.nav_icon_dark.url,
      home: data.nav_home.text,
    },
    main: {
      title: data.home_title.text,
      bio: data.bio.html,
      profilePhoto: data.image.url,
      currentJob: data.current_job.text,
      currentJobLink: data.current_job_link.url,
      currentJobLinkText: data.current_job_link_text.text,
      github: data.github.url,
      githubText: data.github_text.text,
      githubImgLight: data.github_icon_light.url,
      githubImgDark: data.github_icon_dark.url,
      twitter: data.twitter.url,
      twitterText: data.twitter_text.text,
      twitterImgLight: data.twitter_icon_light.url,
      twitterImgDark: data.twitter_icon_dark.url,
    },
    blog: {
      title: data.blog_title.text,
    },
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    window.localStorage.setItem("dark", !darkMode)
  }

  return (
    <Frame dark={darkMode}>
      <Layout {...dataMap.nav} dark={darkMode} toggleDarkMode={toggleDarkMode}>
        <Main {...dataMap.main} dark={darkMode} />
        <Blog {...dataMap.blog} dark={darkMode} />
      </Layout>
    </Frame>
  )
}

export const pageQuery = graphql`
  {
    prismicTitle {
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
          html
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
