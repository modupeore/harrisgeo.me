import React from "react"
import styled from "styled-components"

const spacing = "10px"

export const Wrapper = styled.div`
  display: flex;
  background: #333;
`

export const Left = styled.div`
  display: flex;
  text-decorate: none;
  width: 100%;
`

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Item = styled.a`
  color: #eee;
  margin: ${spacing};
  text-decoration: none;
  cursor: pointer;
`

export const Navbar = () => (
  <Wrapper>
    <Left>
      <Item href="/">HG</Item>
    </Left>
    <Right>
      <Item href="#projects">Projects</Item>
      <Item href="#posts">Posts</Item>
    </Right>
  </Wrapper>
)
