import React, { useState } from "react"
import { graphql } from "gatsby"
import { BlogItems } from "../components/BlogItems"
import { Main } from "../components/Main"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { Layout, Frame } from "../components/Layout"
import { SEO } from "../components/SEO"

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
            tags
          }
        }
      }
    }
    copy: prismicTitle {
      data {
        site_name
        home
        blogs
        icon_dark {
          url
        }
        icon_light {
          url
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

const IndexPage = (props: any) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const {
    copy: { data: copy },
    blogs,
  } = props.data
  const dataObject = {
    nav: {
      blog: copy.blogs,
      brand: copy.site_name,
      sun: copy.icon_light.url,
      moon: copy.icon_dark.url,
      home: copy.home,
    },
    main: {
      title: copy.home_title[0].text,
      bio: copy.bio[0].text,
      profilePhoto: copy.image.url,
      currentJob: copy.current_job[0].text,
      currentJobLink: copy.current_job_link.url,
      currentJobLinkText: copy.current_job_link_text[0].text,
      github: copy.github.url,
      githubText: copy.github_text[0].text,
      githubImgLight: copy.github_icon_light.url,
      githubImgDark: copy.github_icon_dark.url,
      twitter: copy.twitter.url,
      twitterText: copy.twitter_text[0].text,
      twitterImgLight: copy.twitter_icon_light.url,
      twitterImgDark: copy.twitter_icon_dark.url,
    },
    blog: {
      title: copy.blog_title[0].text,
    },
  }

  const toggleDarkMode = () => {
    setDarkValue(!darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <Frame dark={darkMode}>
      <SEO title="Home" />
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <Main {...dataObject.main} dark={darkMode} />

        <BlogItems
          {...dataObject.blog}
          dark={darkMode}
          blogs={blogs}
          preview={true}
        />
      </Layout>
    </Frame>
  )
}

export default IndexPage
