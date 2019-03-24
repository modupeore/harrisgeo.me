import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const spacing = "10px"

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  display: flex;
  background: #333;
`

export const Left = styled.div`
  display: flex;
  text-decorate: none;
  width: 100%;
`

export const Right = styled.div`
  display: ${props => (props.show ? "flex" : "none")};
  justify-content: flex-end;
`

export const Item = styled(Link)`
  color: #eee;
  margin: ${spacing};
  text-decoration: none;
  cursor: pointer;
`

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
