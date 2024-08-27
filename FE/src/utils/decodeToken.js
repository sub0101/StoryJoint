import {jwtDecode }from "jwt-decode"
export const decodeToken  = (token )=>{

    const info = jwtDecode(token);
    return info
}