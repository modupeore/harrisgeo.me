import React from "react"
import {
  Wrapper,
  Img,
  H1,
  Bio,
  Box,
  Link,
  Container,
} from "../components/layout"
import { Parser } from "html-to-react"
import Helmet from "react-helmet"

const parser = new Parser()

const Main = props => {
  const {
    title,
    bio,
    currentJob,
    currentJobLink,
    currentJobLinkText,
    github,
    githubText,
    twitter,
    twitterText,
    profilePhoto,
  } = props

  return (
    <Container>
      <Helmet title="Harris Geo" defer={false} />
      <H1 id="home">{title}</H1>
      <Wrapper>
        <Img src={profilePhoto} />
        <Bio>
          {parser.parse(bio)}
          <Box>
            {currentJob}
            <Link href={currentJobLink} target="_blank">
              {currentJobLinkText}
            </Link>
          </Box>
          <Box>
            <Link href={github} target="_blank">
              {githubText}
            </Link>
            &nbsp;-&nbsp;
            <Link href={twitter} target="_blank">
              {twitterText}
            </Link>
          </Box>
        </Bio>
      </Wrapper>
    </Container>
  )
}

export default Main
