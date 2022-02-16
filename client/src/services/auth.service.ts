import { IUser } from './interface'
const API_URL = 'https://bulls-and-cows-server.herokuapp.com/api/';
// const API_URL = 'http://localhost:8001/api/';

export const setLocalStorage = (data: { username: string, email: string }) => {
  localStorage.setItem('Session', JSON.stringify(data));
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
