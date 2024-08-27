import prisma from "../../../shared/prisma"
import ApiError from "../../../Error/ApiError"
import httpStatus from "http-status"
const isEmailExist = async (email:string)=>{
    console.log(email)
    const isUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(!isUser) throw new ApiError(httpStatus.NOT_FOUND , "Email Already Exist")
    return isUser
}

export const AuthHelper = {
    isEmailExist
}