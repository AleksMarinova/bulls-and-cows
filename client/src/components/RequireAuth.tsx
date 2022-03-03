import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../services/auth.service";

export default function RequireAuth({children}:any) {
  const [token, setToken] = useState();

  const [userAuth] = useState(() => {
    const localRef = getLocalStorage();
    return localRef;
  });

  return token
  ? children
  : <Navigate to='/' replace />
}