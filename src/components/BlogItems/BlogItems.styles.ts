import styled from "styled-components";
import { mobile, dark, light, hover } from "../tokens";

export const Block = styled.button<{ dark: boolean }>`
  min-height: 100px;
  width: calc(100% - 20px);
  margin: 10px 0;
  padding: 10px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => (props.dark ? dark : light)};
  color: ${(props) => (props.dark ? light : dark)};
  border: 0;
  cursor: pointer;
`;

export const Title = styled.div`
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: ${hover};
  }

  @media screen and (max-width: ${mobile}) {
    font-size: 20px;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  margin-top: 10px;

  @media screen and (max-width: ${mobile}) {
    font-size: 16px;
  }
`;

export const Date = styled.div`
  font-size: 16px;
  font-style: italic;
  color: #777;

  @media screen and (max-width: ${mobile}) {
    font-size: 12px;
  }
`;
