import { H1 as H1Layout } from "../components/layout"
import {
  white,
  dark,
  hover,
  black,
  mobile,
  spacing,
} from "../components/tokens"
import styled from "styled-components"
// TODO: investigate why importing from styled-components instead of css causes that much font to blink
import MerriweatherFontFace from "../fonts/merriweather/stylesheet.css"

const font = "Merriweather"

export const PostContainer = styled.div`
  ${MerriweatherFontFace};

  margin: 50px 0;
  font-family: ${font};
  line-height: 2;
  > p > code,
  ol > li > code {
    background: none;
  }

  > div > pre {
    margin: 20px;
    padding: 20px;
    color: red;
    background-color: ${dark};
    white-space: pre;
    text-shadow: 0 1px 0 ${black};
    font: 16px/24px "Courier New", Courier, "Lucida Sans Typewriter",
      "Lucida Typewriter", monospace;
  }

  .language-text {
    color: ${hover};
  }

  > ol > li > a,
  > p > a {
    color: ${props => (props.dark ? white : dark)};
    font-weight: 600;
    :hover {
      color: ${hover};
    }
  }

  @media screen and (max-width: ${mobile}) {
    img {
      width: 75%;
      height: 75%;
    }
  }
`
export const H1 = styled(H1Layout)`
  font-family: ${font};
`
export const Footer = styled.div`
  width: 100%;
  padding-bottom: ${spacing};
`

export const P = styled.p`
  font-size: 14px;
`
