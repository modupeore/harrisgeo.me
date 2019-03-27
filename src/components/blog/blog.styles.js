import styled from "styled-components"
import { mobile } from "../tokens"

export const Block = styled.div`
  height: 100px;
  width: calc(100% - 20px);
  margin: 10px 0;
  padding: 10px;
`

export const Title = styled.a`
  color: black;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: #00b3b0;
  }

  @media screen and (max-width: ${mobile}) {
    font-size: 20px;
  }
`

export const Description = styled.div`
  font-size: 20px;
  margin-top: 10px;

  @media screen and (max-width: ${mobile}) {
    font-size: 16px;
  }
`

export const Date = styled.div`
  font-size: 16px;
  font-style: italic;
  color: #777;

  @media screen and (max-width: ${mobile}) {
    font-size: 12px;
  }
`
