export const setItem = (key = "", value) => {
  typeof window !== "undefined" && window.localStorage.setItem(key, value)
}

export const getItem = (item = "") => {
  let value = null
  if (item && item !== "") {
    value = typeof window !== "undefined" && window.localStorage.getItem(item)
  }

  return value
}

export const getDarkValue = () => {
  return getItem("dark") === "true" ? true : false
}

export const setDarkValue = (value = false) => {
  setItem("dark", value)
}
