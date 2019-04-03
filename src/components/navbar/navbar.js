import React from "react"
import { NavbarWrapper, Left, Item, Right } from "./"

export const Navbar = ({ isLandingPage = true }) => (
  <NavbarWrapper>
    <Left>
      <Item onClick={() => (document.location.href = "/")}>HG</Item>
    </Left>
    <Right show={isLandingPage}>
      <Item onClick={() => (document.location.href = "#")}>Home</Item>
      <Item onClick={() => (document.location.href = "#blog")}>Blog</Item>
    </Right>
  </NavbarWrapper>
)
