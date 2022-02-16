import { IUser } from './interface'; 

const API_URL = process.env.REACT_APP_API_END_POINT;

export const setLocalStorage = (data: { username: string, email: string }) => {
  localStorage.setItem('Session', JSON.stringify(data));
}

export const getLocalStorage = (): any => {
   const value = localStorage.getItem('Session');
   if (typeof value === 'string') {
    return JSON.parse(value);
   }
   return false;
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
    }).then(res => res.json())
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
