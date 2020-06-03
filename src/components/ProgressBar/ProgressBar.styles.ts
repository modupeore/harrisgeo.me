import styled from "styled-components"
import { tokens } from "../tokens"

interface ProgressBarProps {
  progress: number
}

export const ProgressBarWrapper = styled.div`
  position: sticky;
  left: 0;
  top: 38px;
  z-index: 99;
  width: 100%;
  height: 5px;
`

export const ProgressBarBar = styled.div.attrs(
  ({ progress }: ProgressBarProps) => ({
    style: { width: `${progress}%` },
  })
)<ProgressBarProps>`
  height: 100%;
  background-color: ${tokens.hover};
`
