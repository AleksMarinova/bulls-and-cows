export const validatePlayerNumber = (number: string) => {
  if(!number.match(/^[0-9]*$/)) {
    return false;
  }
  if(number.length !== 4){
    return false;
  }
  const set = new Set(number.split(''));
  if(set.size !== number.length){
    return false;
  }
  return true;
}