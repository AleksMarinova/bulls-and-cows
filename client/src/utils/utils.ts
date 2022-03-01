import { IGuess } from "../services/interface";

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

export const calculateBullsAndCows = (guess: string, opponentsNumber: string) => {
  if (guess === opponentsNumber){
    return "You won";
  }
  
  const guessResult: IGuess = {
    guess,
    bulls: 0,
    cows: 0
  };

  const guessNumberArray = guess.split('');
  const opponentsNumberArray = opponentsNumber.split('');

  for (let i = 0; i < guessNumberArray.length; i++){
    if (guessNumberArray[i] === opponentsNumberArray[i]){
      guessResult.bulls ++;
    } else if (opponentsNumberArray.includes(guessNumberArray[i])) {
      guessResult.cows ++;
    }
  }
  return guessResult;
}

export const generateRandomNumber = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numbers.sort(() => Math.random() - 0.5).slice(0, 4).join('');
}