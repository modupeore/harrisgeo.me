export const setItem = (key: string = "", value: string): void => {
  typeof window !== "undefined" && window.localStorage.setItem(key, value)
}

export const getItem = (item = ""): boolean | string | null => {
  let value = null
  if (item && item !== "") {
    value = typeof window !== "undefined" && window.localStorage.getItem(item)
  }

  return value
}

export const getDarkValue = (): boolean => {
  return getItem("dark") === true ? true : false
}

export const setDarkValue = (value: boolean = false): void => {
  setItem("dark", value.toString())
}
