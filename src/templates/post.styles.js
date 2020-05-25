import { H1 as H1Layout } from "../components/layout"
import { white, dark, hover, black, mobile } from "../components/tokens"
import styled from "styled-components"
const font = "'Merriweather', sans-serif"

export const PostContainer = styled.div`
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

  > ol > li > a,
  > p > a {
    color: ${(props) => (props.dark ? white : dark)};
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
