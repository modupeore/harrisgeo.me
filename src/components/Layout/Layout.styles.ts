import styled from "styled-components"
import { tokens } from "../tokens"
// TODO: use styled system instead of tokens
import { layout, space, LayoutProps, SpaceProps } from "styled-system"

interface StyledSystemProps extends LayoutProps, SpaceProps {}

interface Dark {
  dark: boolean
}

interface Small {
  small?: boolean
}

export const Frame = styled.div<Dark>`
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => (props.dark ? tokens.dark : tokens.light)};
  height: 100%;
  width: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`

export const Body = styled.div<Dark>`
  position: absolute;
  left: 0;
  top: 0;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 100%;
  color: ${(props) => (props.dark ? tokens.light : tokens.dark)};
`

export const Container = styled.div<Dark>`
  position: sticky;
  margin: ${tokens.spacingXl} auto;
  width: 800px;
  height: calc(100% - ${tokens.spacing3Xl});
  background: ${(props) => (props.dark ? tokens.dark : tokens.light)};

  @media screen and (max-width: ${tokens.mobile}) {
    margin: auto;
    width: 350px;
    padding-top: ${tokens.spacing2Xl};
    padding-left: 0;
    padding-right: 0;
    height: calc(100% - ${tokens.spacing2Xl});
  }

  @media screen and (max-width: ${tokens.mobileXs}) {
    width: 300px;
  }

  @media screen and (min-width: ${tokens.mobile}) and (max-width: ${tokens.tablet}) {
    width: 700px;
  }
`

export const Section = styled.div`
  position: relative;
  height: 100%;
  background: red;
  border-top: 2px solid white;
`

export const Link = styled.a<Dark>`
  color: ${(props) => (props.dark ? tokens.light : tokens.dark)};
  font-weight: 500;

  &:hover {
    color: ${tokens.hover};
  }
`

export const Wrapper = styled.div`
  display: flex;

  @media all and (min-width: ${tokens.mobile}) {
    position: absolute;
    top: calc(50% - 150px);
  }

  @media all and (max-width: ${tokens.mobile}) {
    display: block;
  }
`

export const Icon = styled.img<StyledSystemProps>`
  ${layout}
  ${space}
`

// TODO: make a function for doing token calculations
export const Image = styled.img`
  border-radius: 3px;
  border: 1px solid grey;
  height: ${tokens.imageY};
  width: ${tokens.imageX};

  @media all and (max-width: ${tokens.mobile}) {
    position: relative;
    left: calc(50% - 100px);
    height: ${tokens.imageYMob};
    width: ${tokens.imageXMob};
  }
`

export const Bio = styled.div`
  margin: 0;
  padding: 0 ${tokens.spacing};
  font-size: 28px;

  @media screen and (max-width: ${tokens.mobile}) {
    font-size: 20px;
    margin-top: ${tokens.spacing};
    text-align: center;
  }
  > p {
    margin: 0;
  }
`

export const Box = styled.div<Small>`
  padding: ${tokens.spacing} 0;

  @media screen and (max-width: ${tokens.mobile}) {
    padding: ${(props) => (props.small ? 0 : 20)};
  }
`

export const H1 = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 66px;
  margin-bottom: 30px;

  @media screen and (max-width: ${tokens.mobile}) {
    font-size: 26px;
  }
`

export const Row = styled.div`
  width: 100%;
  text-align: center;
`

export const Tag = styled.a.attrs({ as: "button" })<Dark>`
  margin: 0 ${tokens.spacingS};
  z-index: 99999;
  border: 1px solid black;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.dark ? tokens.dark : tokens.light)};
  border-radius: 5px;
  background-color: ${(props) => (props.dark ? tokens.light : tokens.dark)};
  padding: ${tokens.spacingXs} ${tokens.spacingS};
  cursor: pointer;

  :hover {
    color: ${tokens.hover};
  }
`
