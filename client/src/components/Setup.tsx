import { useEffect, useState } from "react";
import { getLocalStorage } from "../services/auth.service";
import { io } from 'socket.io-client';

const API_URL:any = process.env.REACT_APP_API_END_POINT;
console.log(API_URL);
const socket = io(API_URL);

const Setup = () => {
    const [user, setUser] = useState(() => {
        const user = getLocalStorage();
        return user;
    })

    useEffect(() => {
        console.log(user);
    }, [])

    return (
        <div>
            <h1>Join Room</h1>
        </div>
    )
}

export default Setup;