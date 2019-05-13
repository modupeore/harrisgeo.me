import styled from "styled-components"
import { mobile } from "../tokens"

export const Block = styled.button`
  height: 100px;
  width: calc(100% - 20px);
  margin: 10px 0;
  padding: 10px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  background-color: white;
  border: 0;
  cursor: pointer;
`

export const Title = styled.div`
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
