import React, { useState } from "react"
import { Layout, Frame } from "../components/layout"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { Blogs } from "../components/Blogs"

const BlogsPage = ({ data }) => {
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
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <Blogs
          {...dataObject.blog}
          dark={darkMode}
          blogs={blogs}
          preview={false}
        />
      </Layout>
    </Frame>
  )
}

export const pageQuery = graphql`
  {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: DESC }
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
        blog_title {
          text
        }
      }
    }
  }
`

export default BlogsPage
