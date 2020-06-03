import React from "react";
import {
  Wrapper,
  ProfilePhoto,
  H1,
  Bio,
  Box,
  Link,
  Container,
  Icon,
} from "../Layout";
import { Parser } from "html-to-react";

const parser = new Parser();

export const Main = (props: any) => {
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
  } = props;

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
  );
};
