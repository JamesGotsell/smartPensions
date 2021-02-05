
type arrayOfStrings = string[]
export const getRamdomValue = (array: arrayOfStrings): string => {
  let randomIndex = Math.floor(Math.random() * (array.length - 1) + 0);
  return array[randomIndex]
}