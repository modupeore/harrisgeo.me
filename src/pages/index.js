import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Blog from "./blog"
import Main from "./main"
import { Layout } from "../components/layout"

const IndexPage = () => {
  const {
    prismicTitle: { data },
  } = useStaticQuery(pageQuery)

  const dataMap = {
    nav: {
      blog: data.nav_blog.text,
      brand: data.nav_brand.text,
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
      twitter: data.twitter.url,
      twitterText: data.twitter_text.text,
    },
    blog: {
      title: data.blog_title.text,
    },
  }

  return (
    <Layout {...dataMap.nav}>
      <Main {...dataMap.main} />
      <Blog {...dataMap.blog} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    prismicTitle {
      data {
        nav_brand {
          text
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
        twitter_text {
          text
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
