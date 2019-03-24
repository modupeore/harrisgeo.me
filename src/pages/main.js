import React from "react"
import { Wrapper, Img, H1, P, Link, Container } from "../components/layout"
import MeSnow from "../images/me-snow.jpg"

const Main = () => (
  <Container>
    <H1>HARRIS GEO</H1>
    <Wrapper>
      <Img src={MeSnow} />
      <P>
        I am a Full stack developer. During the last 6 years I have worked on
        plenty of projects with <b>React</b>,&nbsp; <b>Node.js</b>,{" "}
        <b>Typescript </b> and more.
        <br />
        Now working @&nbsp;
        <Link href="https://www.fairfx.com/">FairFx</Link>
        <br />
        <br />
        <Link href="https://github.com/harrisgeo88">Github</Link>
        &nbsp;-&nbsp;
        <Link href="https://twitter.com/harrisgeo88">Twitter </Link>
      </P>
    </Wrapper>
  </Container>
)

export default Main
