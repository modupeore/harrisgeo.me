import styled from "styled-components"

const spacing = "10px"

export const NavbarWrapper = styled.div`
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

export const Item = styled.a`
  color: #eee;
  margin: ${spacing};
  text-decoration: none;
  cursor: pointer;
  scroll-behavior: smooth;
`
