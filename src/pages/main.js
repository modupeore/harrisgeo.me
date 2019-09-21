import React from "react"
import {
  Wrapper,
  ProfilePhoto,
  H1,
  Bio,
  Box,
  Link,
  Container,
  Icon,
} from "../components/layout"
import { Parser } from "html-to-react"
import Helmet from "react-helmet"

const parser = new Parser()

const Main = props => {
  const {
    bio,
    currentJob,
    currentJobLink,
    currentJobLinkText,
    dark,
    github,
    githubText,
    githubImgDark,
    githubImgLight,
    profilePhoto,
    title,
    twitter,
    twitterText,
    twitterImgDark,
    twitterImgLight,
  } = props

  return (
    <Container dark={dark} id="home">
      <Helmet title="Harris Geo" defer={false} />
      <H1>{title}</H1>
      <Wrapper>
        <ProfilePhoto src={profilePhoto} />
        <Bio>
          {parser.parse(bio)}
          <Box>
            {currentJob}
            <Link href={currentJobLink} target="_blank" dark={dark}>
              {currentJobLinkText}
            </Link>
          </Box>
          <Box>
            <Link href={github} target="_blank" dark={dark}>
              <Icon
                src={dark ? githubImgLight : githubImgDark}
                alt={githubText}
                width={25}
                height={25}
                mr={10}
              />
            </Link>
            <Link href={twitter} target="_blank" dark={dark}>
              <Icon
                src={dark ? twitterImgLight : twitterImgDark}
                alt={twitterText}
                width={25}
                height={25}
                ml={10}
              />
            </Link>
          </Box>
        </Bio>
      </Wrapper>
    </Container>
  )
}

export default Main
