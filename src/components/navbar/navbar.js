import React from "react"
import { Wrapper, Left, Item, Right } from "./"

export const Navbar = ({ isLandingPage = true }) => (
  <Wrapper>
    <Left>
      <Item to="" onClick={() => (document.location.href = "/")}>
        HG
      </Item>
    </Left>
    <Right show={isLandingPage}>
      <Item onClick={() => (document.location.href = "#")}>Home</Item>
      <Item onClick={() => (document.location.href = "#blog")}>Blog</Item>
    </Right>
  </Wrapper>
)
