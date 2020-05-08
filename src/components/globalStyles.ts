import { createGlobalStyle } from "styled-components"
import { MerriweatherRegular } from "../fonts"

export default createGlobalStyle`
  @font-face {
    font-family: 'Merriweather'; 
    font-style: normal;
    font-weight: 300;
    src: local('Merriweather'), url(${MerriweatherRegular}) format('truetype')
  }
`
