export const validatePlayerNumber = (number: string) => {
  return number.match(/^[0-9]*$/) ? true : false;
}