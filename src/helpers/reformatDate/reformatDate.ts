/**
 * Change the date format from YYYY-MM-DD to DD/MM/YYYY
 * @param date string
 */
export const reformatDate = (date: string) => {
  return date.split("-").reverse().join().replace(/,/g, "/")
}
