import React from "react"
import { Wrapper, Left, Item, Right } from "./"
import { animateScroll as scroll } from "react-scroll"

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
      <Item onClick={() => scroll.scrollToTop()}>Home</Item>
      <Item to="blog" smooth={true}>
        Blog
      </Item>
    </Right>
  </Wrapper>
)
