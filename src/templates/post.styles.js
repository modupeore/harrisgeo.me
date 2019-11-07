import { H1 as H1Layout } from "../components/layout"
import { white, dark, hover } from '../components/tokens'
import styled from "styled-components"

const font = " 'Merriweather', serif"


export const PostContainer = styled.div`
  margin: 50px 0;
  font-family: ${font};
  line-height: 2.0;
  > p > code, ol > li > code {
    background: none;
  }

  > div > pre {
    background: ${white};
  }

  > ol > li > a, > p > a {
    color: ${props => props.dark ? white : dark};
    font-weight: 600;
    :hover {
      color: ${hover};
    }
  }
`
export const H1 = styled(H1Layout)`
  font-family: ${font};
`