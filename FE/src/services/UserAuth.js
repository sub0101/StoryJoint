import {instance } from "../api/axios";


export async function  login(email , password) {
    try{
        const response =    await instance.post('/auth/login' , {email , password})

        if(response.data.success){
            console.log("successfull")
            console.log(response.data.data)
            return response.data.data;
        }
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

