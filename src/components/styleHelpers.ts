import { tokens } from "./tokens"

export const selection = `
  &::selection {
    background-color: ${tokens.hover};
    color: ${tokens.white};
  }
`

export const outline = `
  &:focus {
    outline: 3px solid ${tokens.hover};
  }
`
