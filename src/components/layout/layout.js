import React from "react"
import { Body, Image } from "./"
import { Navbar, NavItem } from "swag-components"

export const Img = props => (
  <div>
    <Image {...props} />
  </div>
)

export const Layout = ({
  children,
  isLandingPage = true,
  blog,
  brand,
  home,
}) => {
  const goto = (url = "") => {
    document.location.href = url
  }

  return (
    <Body>
      <Navbar onTitleClick={() => goto("/")} title={brand}>
        <NavItem onClick={() => goto("#")}>{home}</NavItem>
        <NavItem onClick={() => goto("#blog")}>{blog}</NavItem>
      </Navbar>
      {children}
    </Body>
  )
}
