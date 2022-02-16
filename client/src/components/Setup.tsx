import { useEffect, useState } from "react";
import { getLocalStorage } from "../services/auth.service";

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