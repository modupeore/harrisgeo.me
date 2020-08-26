import React from "react"
import {
  Wrapper,
  ProfilePhoto,
  H1,
  Bio,
  Box,
  Link,
  Container,
  SocialMediaIcon,
  IconsContainer,
} from "../Layout"
import { Parser } from "html-to-react"

const parser = new Parser()

export const Main = (props: any) => {
  const {
    bio,
    currentJob,
    currentJobLink,
    currentJobLinkText,
    dark,
    githubImgDark,
    githubImgLight,
    liImgLight,
    liImgDark,
    devImgLight,
    devImgDark,
    profilePhoto,
    title,
    githubUrl,
    twitterUrl,
    devUrl,
    liUrl,
    twitterImgDark,
    twitterImgLight,
  } = props

  return (
    <Container dark={dark} id="home">
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
          <Box small>
            <IconsContainer>
              <Link href={githubUrl} target="_blank" dark={dark}>
                <SocialMediaIcon
                  src={dark ? githubImgLight.url : githubImgDark.url}
                  alt={dark ? githubImgLight.alt : githubImgDark.alt}
                  width={30}
                  height={30}
                  mr={10}
                />
              </Link>
              <Link href={twitterUrl} target="_blank" dark={dark}>
                <SocialMediaIcon
                  src={dark ? twitterImgLight.url : twitterImgDark.url}
                  alt={dark ? twitterImgLight.alt : twitterImgDark.alt}
                  width={30}
                  height={30}
                  ml={10}
                />
              </Link>
              <Link href={devUrl} target="_blank" dark={dark}>
                <SocialMediaIcon
                  src={dark ? devImgLight.url : devImgDark.url}
                  alt={dark ? devImgLight.alt : devImgDark.alt}
                  width={30}
                  height={30}
                  ml={10}
                />
              </Link>
              <Link href={liUrl} target="_blank" dark={dark}>
                <SocialMediaIcon
                  src={dark ? liImgLight.url : liImgDark.url}
                  alt={dark ? liImgLight.alt : liImgDark.alt}
                  width={30}
                  height={30}
                  ml={10}
                />
              </Link>
            </IconsContainer>
          </Box>
        </Bio>
      </Wrapper>
    </Container>
  )
}
