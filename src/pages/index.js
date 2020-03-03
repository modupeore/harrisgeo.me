import React, { useState } from "react"
import { graphql } from "gatsby"
import Blog from "./blog"
import Main from "./main"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { Layout, Frame } from "../components/layout"
import GlobalStyles from '../components/globalStyles'

const IndexPage = props => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const {
    data: {
      prismicTitle: { data },
    },
  } = props
  const dataMap = {
    nav: {
      blog: data.nav_blog[0].text,
      brand: data.nav_brand[0].text,
      sun: data.nav_icon_light.url,
      moon: data.nav_icon_dark.url,
      home: data.nav_home[0].text,
    },
    main: {
      title: data.home_title[0].text,
      bio: data.bio[0].text,
      profilePhoto: data.image.url,
      currentJob: data.current_job[0].text,
      currentJobLink: data.current_job_link.url,
      currentJobLinkText: data.current_job_link_text[0].text,
      github: data.github.url,
      githubText: data.github_text[0].text,
      githubImgLight: data.github_icon_light.url,
      githubImgDark: data.github_icon_dark.url,
      twitter: data.twitter.url,
      twitterText: data.twitter_text[0].text,
      twitterImgLight: data.twitter_icon_light.url,
      twitterImgDark: data.twitter_icon_dark.url,
    },
    blog: {
      title: data.blog_title[0].text,
    },
  }

  const toggleDarkMode = () => {
    setDarkValue(!darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <Frame dark={darkMode}>
      <GlobalStyles />
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
