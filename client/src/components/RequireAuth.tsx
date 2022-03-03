import { Navigate } from "react-router-dom";

export default function RequireAuth({children, userLoggedIn}: any) {
  return userLoggedIn
  ? children
  : <Navigate to='/' replace />
}