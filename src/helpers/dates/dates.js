/**
 * Get the date today
 * @returns {string} format "DD-MM-YYYY"
 */
export const dateToday = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 //January is 0!

  let yyyy = today.getFullYear()
  if (dd < 10) {
    dd = "0" + dd
  }
  if (mm < 10) {
    mm = "0" + mm
  }
  const date = dd + "-" + mm + "-" + yyyy

  return date
}
