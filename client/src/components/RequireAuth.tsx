import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../services/auth.service";

export default function RequireAuth({children}:any){
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    setUserAuth(() => {
      const localRef = getLocalStorage();
      return localRef;
    })
  }, [])

  useEffect(() => {
    if (userAuth === false) {
      return navigate('/');
    }
  }, [userAuth])

  return userAuth
  ? children
  : null
}