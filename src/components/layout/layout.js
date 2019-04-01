import React from "react"
import { Navbar } from "../navbar"
import { Body, Image } from "./"

export const Img = props => <Image {...props} />

export const Layout = ({ children, isLandingPage = true }) => (
  <Body>
    <Navbar isLandingPage={isLandingPage} />
    {children}
  </Body>
)
