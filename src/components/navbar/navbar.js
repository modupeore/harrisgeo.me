import React from "react"
import { Wrapper, Left, Item, Right } from "./"

const goHome = () => {
  document.location.href = "/"
}

export const Navbar = ({ isLandingPage = true }) => (
  <Wrapper>
    <Left>
      <Item to="" onClick={goHome}>
        HG
      </Item>
    </Left>
    <Right show={isLandingPage}>
      <Item to="home">Home</Item>
      <Item to="blog">Posts</Item>
    </Right>
  </Wrapper>
)
