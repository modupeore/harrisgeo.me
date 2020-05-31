import styled from "styled-components";
import {
  spacing,
  spacingXl,
  spacing2Xl,
  spacing3Xl,
  mobile,
  imageY,
  imageX,
  imageYMob,
  imageXMob,
  light,
  dark,
  hover,
  tablet,
} from "../tokens";
// TODO: use styled system instead of tokens
import { layout, space, LayoutProps, SpaceProps } from "styled-system";

interface StyledSystemProps extends LayoutProps, SpaceProps {}

interface Dark {
  dark: boolean;
}

export const Frame = styled.div<Dark>`
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => (props.dark ? dark : light)};
  height: 100%;
  width: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const Body = styled.div<Dark>`
  position: absolute;
  left: 0px;
  top: 0px;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 100%;
  color: ${(props) => (props.dark ? light : dark)};
`;

export const Container = styled.div<Dark>`
  position: sticky;
  margin: ${spacingXl} auto;
  width: 800px;
  height: calc(100% - ${spacing3Xl});
  background: ${(props) => (props.dark ? dark : light)};
  @media screen and (max-width: ${mobile}) {
    margin: auto;
    width: 350px;
    padding-top: ${spacing2Xl};
    padding-left: ${spacing}
    padding-right: ${spacing}
    height: calc(100% - ${spacing2Xl});
  }

  @media screen and (min-width: ${mobile}) and (max-width: ${tablet}) {
    width: 700px;
  }
`;

export const Section = styled.div`
  position: relative;
  height: 100%;
  background: red;
  border-top: 2px solid white;
`;

export const Link = styled.a<Dark>`
  color: ${(props) => (props.dark ? light : dark)};
  font-weight: 500;

  &:hover {
    color: ${hover};
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media all and (min-width: ${mobile}) {
    position: absolute;
    top: calc(50% - 150px);
  }

  @media all and (max-width: ${mobile}) {
    display: block;
  }
`;

export const Icon = styled.img<StyledSystemProps>`
  ${layout}
  ${space}
`;

// TODO: make a function for doing token calculations
export const Image = styled.img`
  border-radius: 3px;
  border: 1px solid grey;
  height: ${imageY};
  width: ${imageX};

  @media all and (max-width: ${mobile}) {
    position: relative;
    left: calc(50% - 100px);
    height: ${imageYMob};
    width: ${imageXMob};
  }
`;

export const Bio = styled.div`
  margin: 0;
  padding: 0 ${spacing};
  font-size: 20pt;

  @media screen and (max-width: ${mobile}) {
    font-size: 16pt;
    margin-top: ${spacing};
    text-align: center;
  }
  > p {
    margin: 0;
  }
`;

export const Box = styled.div`
  padding: 20px 0;
`;

export const H1 = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 50pt;
  margin-bottom: 30px;

  @media screen and (max-width: ${mobile}) {
    font-size: 26px;
  }
`;

export const Row = styled.div`
  width: 100%;
  text-align: center;
`;
