import { IUser } from './interface'
const API_URL = 'http://localhost:8001/api/';

export const register = ({ email, password, username }: IUser) =>{
    return fetch(API_URL + 'register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            username: username
        })
    })
}