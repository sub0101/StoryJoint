import { User } from "@prisma/client";
import { LoginPayload, refreshTokenPayload, RegisterPayload, UserLoginReponse } from "../../../interfaces";
import prisma from "../../../shared/prisma";
import { Request ,Response } from "express";
import { comparePassword, hashPassword } from "../../../utils/bycrypt";
import ApiError from "../../../Error/ApiError";
import httpStatus, { UNAUTHORIZED } from "http-status";
import { generateAceessToken, generateRefreshToken, verifyRefreshToken, verifyToken } from "../../../utils/jwt";
import { AuthHelper } from "./auth.helper";
import { IJwtPayload } from "../../../interfaces";
const login = async (payload: LoginPayload): Promise<any> => {

    const { email, password } = payload;
    const user  = await AuthHelper.isEmailExist(email);
    
   const userExist =  await comparePassword(password , user.password)

    if(!userExist) throw new ApiError(httpStatus.NOT_FOUND , "Wrong Email or Password")

    const refreshToken = await generateRefreshToken({ id: user.id, email: user.email });
    const accessToken = await generateAceessToken({ id: user.id, email: user.email });

    await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken },
    });

    const result = {
        id: user.id,
        email: email,
        accessToken: accessToken
    }
    return { result, refreshToken };

}


const register = async (payload: RegisterPayload): Promise<User> => {
    const isEmail = await AuthHelper.isEmailExist(payload?.email);
    payload.password = await hashPassword(payload.password);
    const result = await prisma.user.create({
        data: payload
    }
    )
    return result
}

const refreshToken = async(req:Request , res:Response):Promise<refreshTokenPayload>  => {

    
    const refreshToken= req.cookies.refreshToken
 

    if (!refreshToken) throw new ApiError(httpStatus.NO_CONTENT  , "User UNAUTHORIZED")

    const isExist  =await  prisma.user.findFirst({
        where:{
            refreshToken:refreshToken
        }
    })
    if(!isExist) throw new ApiError(httpStatus.UNAUTHORIZED  , "User UNAUTHORIZED")

const accessToken = await verifyRefreshToken(refreshToken ,isExist.email)
return {accessToken:accessToken};

}

export const AuthService = {
    login,
    register,
    refreshToken
}