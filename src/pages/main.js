import React from "react"
import { Wrapper, Img, H1, P, Link, Container } from "../components/layout"
import MeSnow from "../images/me-snow.jpg"

const Main = () => (
  <Container id="home">
    <H1>HARRIS GEO</H1>
    <Wrapper>
      <Img src={MeSnow} />
      <P>
        I am a Full stack developer. I have been working with <b>React</b>
        ,&nbsp; <b>Node.js</b>,&nbsp;
        <b>Typescript </b> for the last 6+ years.
        <br />
        Now working @&nbsp;
        <Link href="https://www.fairfx.com/" target="_blank">
          FairFx
        </Link>
        <br />
        <br />
        <Link href="https://github.com/harrisgeo88" target="_blank">
          Github
        </Link>
        &nbsp;-&nbsp;
        <Link href="https://twitter.com/harrisgeo88" target="_blank">
          Twitter
        </Link>
      </P>
    </Wrapper>
  </Container>
)

export default Main
