
import { Navigate, Outlet } from 'react-router-dom'


import { isLoggedin } from '../services/auth.service';
import { getFromLocalStorage } from './lcoalstorage';
export function ValidateLogin() {
console.log(getFromLocalStorage('accessToken'))
  return (
    <>
 {isLoggedin? <Outlet/> :    <Navigate to="user/login"  replace /> }
    </>
 
  )
}

export default ValidateLogin