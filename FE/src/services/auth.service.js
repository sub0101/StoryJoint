
import { decodeToken } from "../utils/decodeToken"

export const getUserInfo  = ()=>{

    const auth = getFromLocalStorage('accessToken')

    if(auth) {
        return decodeToken(auth.accessToken)
    }
    else return null
}
export const  isLoggedin = ()=>{
    if(getFromLocalStorage('accessToken')) return true;
    else return false;
}
export const loggedOut = () => {
    return localStorage.removeItem('accessToken')
}
