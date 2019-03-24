import React from "react"
import styled from "styled-components"
import { Navbar } from "./Navbar"
import { spacing, mobile, tablet } from "./tokens"

export const Body = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  font-family: "Montserrat", sans-serif;
  width: 100%;
`

export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: red;
  border-top: 2px solid white;
`

export const Link = styled.a`
  color: black;
  font-weight: 500;
`

export const Container = styled.div`
  padding: 60px;

  @media screen and (max-width: ${mobile}) {
    padding: ${spacing};
  }

  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    padding: 40px;
  }
`

export const Wrapper = styled.div`
  display: flex;

  @media all and (max-width: ${mobile}) {
    display: block;
  }
`

const Image = styled.img`
  border-radius: 3px;
  border: 1px solid grey;
  height: 300px;
  width: 375px;

  @media all and (max-width: ${mobile}) {
    position: relative;
    left: calc(50% - 93.75px);
    height: 150px;
    width: 187.5px;
  }
`

export const P = styled.div`
  margin: 0;
  padding: 0 ${spacing};
  font-size: 24pt;

  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    font-size: 20pt;
  }

  @media screen and (max-width: ${mobile}) {
    font-size: 16pt;
    margin-top: ${spacing};
  }
`

export const H1 = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: ${mobile}) {
    font-size: 26px;
  }
`

export const Row = styled.div`
  width: 100%;
  text-align: center;
`

export const Img = props => (
  <div>
    <Image {...props} />
  </div>
)

export const Layout = ({ children }) => (
  <Body>
    <Navbar />
    {children}
  </Body>
)
