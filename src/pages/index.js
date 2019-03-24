import React from "react"
import Posts from "./posts"
import Main from "./main"
import Projects from "./projects"
import { Layout } from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Main />
      <Posts />
    </Layout>
  )
}

export default IndexPage
