import React, { useEffect } from 'react'
import useAuth from './useAuth'
import axios  from "../../api/axios"

function useLogout() {
    const {setAuth} = useAuth()

   const logout=  async ()=>{
        try {
            console.log("logout")

            // const response = await axios.get('/auth/logout'  ,{
            //     withCredentialst:true
            // })
            const response = await axios.get('/auth/logout', {
                withCredentials: true
            });
            setAuth({})
        } catch (err) {
            console.error(err);
        }
    } 

  return logout;
}

export default useLogout