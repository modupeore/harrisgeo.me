import { tokens } from "../tokens"

export const getBackgroundColor = (progress: number): string => {
  if (progress >= 95) return tokens.green
  else if (progress >= 80 && progress < 95) return tokens.lightgreen
  else if (progress >= 70 && progress < 80) return tokens.yellow
  else if (progress >= 60 && progress < 70) return tokens.lightorange
  else if (progress >= 40 && progress < 60) return tokens.orange
  else if (progress >= 20 && progress < 40) return tokens.orangered
  else return tokens.red
}
