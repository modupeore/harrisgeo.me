/**
 * Get the date today
 * @returns {string} format "DD-MM-YYYY"
 */
export const dateToday = (): string => {
  let today = new Date()
  let dd: number = today.getDate()
  let mm: number = today.getMonth() + 1 //January is 0!
  let day: string = `${dd}`
  let month: string = `${mm}`
  let year = today.getFullYear()
  if (dd < 10) {
    day = "0" + dd
  }
  if (mm < 10) {
    month = "0" + mm
  }

  return `${day}-${month}-${year}`
}
