import { IUser } from './interface'; 

const API_URL = process.env.REACT_APP_API_END_POINT + '/api/';

export const setLocalStorage = (data: { username: string, email: string }) => {
  localStorage.setItem('Session', JSON.stringify(data));
}

export const getLocalStorage = (): any => {
  const value = localStorage.getItem('Session');
  if (typeof value === 'string') {
    console.log(value)
    return JSON.parse(value);
  }
  return '';
}

export const register = async ({ email, password, username }: IUser) =>{
    return await fetch(API_URL + 'register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            username: username
        })
    }).then(res => res)
}

export const login = async ({ email, password }: IUser) => {
  return await fetch(API_URL + 'login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: email,
          password: password,
      })
  }).then(res => res)
}
