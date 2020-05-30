import React from "react"
import { ProgressBarBar, ProgressBarWrapper } from "./ProgressBar.styles"

export const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarBar progress={progress} />
    </ProgressBarWrapper>
  )
}
