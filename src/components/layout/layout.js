import React from "react"
import { Navbar } from "../navbar"
import { Body, Image } from "./"

export const Img = props => (
  <div>
    <Image {...props} />
  </div>
)

export const Layout = ({ children, isLandingPage = true }) => (
  <Body>
    <Navbar isLandingPage={isLandingPage} />
    {children}
  </Body>
)
