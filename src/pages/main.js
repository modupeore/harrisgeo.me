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
import MeSnow from "../images/me-snow.jpg"
import Helmet from "react-helmet"

const Main = () => (
  <Container>
    <Helmet title="Harris Geo" defer={false} />
    <H1 id="home">HARRIS GEO</H1>
    <Wrapper>
      <Img src={MeSnow} />
      <Bio>
        I am a Full stack developer. I have been working with <b>React</b>
        ,&nbsp; <b>Node.js</b> and&nbsp;
        <b>Typescript </b> for the last 6+ years.
        <Box>
          Now working @&nbsp;
          <Link href="https://www.fairfx.com/" target="_blank">
            FairFX
          </Link>
        </Box>
        <Box>
          <Link href="https://github.com/harrisgeo88" target="_blank">
            Github
          </Link>
          &nbsp;-&nbsp;
          <Link href="https://twitter.com/harrisgeo88" target="_blank">
            Twitter
          </Link>
        </Box>
      </Bio>
    </Wrapper>
  </Container>
)

export default Main
