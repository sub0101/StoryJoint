import  axiosPrivate, { instance } from "../axios";

export async function  login(email , password) {
    try{
        const response =    await instance.post('/auth/login' , {email , password})
     

        if(response.data.success)  return response.data.data;
        
        else{
            console.log("Wrong email id or password")
            return null;
        }
    }

    catch(e){
        console.log(e.message)
        return null
    }
  
}


export  const signup = async() =>{

}

export const logout = async() =>{
    const response = await instance.get('/auth/logout', {
        withCredentials: true
    });
    return response;
}


export const refreshToken = async() =>{
    console.log("refresh token")
    const response =  await instance.get('/auth/refresh') 
    return response;
}