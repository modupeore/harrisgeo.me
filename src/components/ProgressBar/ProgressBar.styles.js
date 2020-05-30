import styled from "styled-components"
import { hover } from "../tokens"

export const ProgressBarWrapper = styled.div`
  position: sticky;
  left: 0;
  top: 38px;
  z-index: 1;
  width: 100%;
  height: 5px;
`

export const ProgressBarBar = styled.div.attrs(({ progress }) => ({
  style: { width: `${progress}%` },
}))`
  height: 100%;
  background-color: ${hover};
`
