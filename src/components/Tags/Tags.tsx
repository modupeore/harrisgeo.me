import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, Frame } from "../Layout"
import { getDarkValue, setDarkValue } from "../../helpers/localStorage"
import { Helmet } from "react-helmet"
import { BlogItems } from "../BlogItems"

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
        blog_title {
          text
        }
      }
    }
  }
`

const TagsPage = (props: any) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const { path, data } = props
  const {
    copy: { data: copy },
    blogs: allBlogs,
  } = data
  const dataObject = {
    nav: {
      blog: copy.blogs,
      brand: copy.site_name,
      sun: copy.icon_light.url,
      moon: copy.icon_dark.url,
      home: copy.home,
    },
    blog: {
      title: copy.blog_title[0].text,
    },
  }

  const tag = path.replace("/tags/", "")
  const blogs: any = { edges: [] }
  allBlogs.edges.forEach((blog: any) => {
    if (blog.node.frontmatter.tags.includes(tag)) {
      blogs.edges.push(blog)
    }
  })

  const toggleDarkMode = () => {
    setDarkValue(!darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <Frame dark={darkMode}>
      <Helmet>
        <title>Harris Geo - Tag</title>
      </Helmet>
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <BlogItems
          {...dataObject.blog}
          title={tag.charAt(0).toUpperCase() + tag.slice(1)}
          dark={darkMode}
          blogs={blogs}
          preview={false}
        />
      </Layout>
    </Frame>
  )
}

export default TagsPage
