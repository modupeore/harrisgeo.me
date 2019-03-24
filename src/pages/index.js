import React from "react"
import Blog from "./blog"
import Main from "./main"
import { Layout } from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Main />
      <Blog />
    </Layout>
  )
}

export default IndexPage
