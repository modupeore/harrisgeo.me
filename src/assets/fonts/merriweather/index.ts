import { css } from "styled-components";

import MerriweatherWoff from "./Merriweather-Regular.woff";
import MerriweatherWoff2 from "./Merriweather-Regular.woff2";
import MerriweatherTtf from "./Merriweather-Regular.ttf";

const MerriweatherFontFace = css`
  @font-face {
    font-family: "Merriweather";
    src: url(${MerriweatherWoff2}) format("woff2"),
      url(${MerriweatherWoff}) format("woff"),
      url(${MerriweatherTtf}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;
export default MerriweatherFontFace;
