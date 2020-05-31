import React from "react";
import { ProgressBarBar, ProgressBarWrapper } from "./ProgressBar.styles";

export const ProgressBar = ({ progress }: any) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarBar progress={progress} />
    </ProgressBarWrapper>
  );
};
