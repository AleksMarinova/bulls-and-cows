import { IUser } from './interface'
// const API_URL = 'https://bulls-and-cows-server.herokuapp.com/api/';
const API_URL = 'http://localhost:8001/api/';

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