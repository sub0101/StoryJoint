import catchAsync from "../../../utils/asyncError";
import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import { User } from "@prisma/client";
import httpStatus from "http-status";
import { refreshTokenPayload, UserLoginReponse } from "../../../interfaces";
import ApiError from "../../../Error/ApiError";
import env from "../../../config";

const login = catchAsync(async (req: Request, res: Response) => {
    const { result, refreshToken } = await AuthService.login(req.body)
    console.log(result)
    refreshToken && res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true});
    sendResponse<UserLoginReponse>(
        res,
        {
            statusCode: httpStatus.OK,
            success: true,
            message: "sucess",
            data: result

        })
})
const register = catchAsync(async (req: Request, res: Response): Promise<any> => {
    console.log("register")
    console.log(req.body)

    const result = await AuthService.register(req.body);

    sendResponse<User>(
        res,
        {
            statusCode: httpStatus.OK,
            success: true,
            message: "sucess",
            data: null
        }

    )

})

const refreshToken =  catchAsync(async(req:Request , res:Response) => {
 
const result  = await AuthService.refreshToken(req , res);

sendResponse<refreshTokenPayload>(
    res,
    {
        statusCode: httpStatus.OK,
        success: true,
        message: "sucess",
        data: result

    })
})

export const AuthController = {
    login,
    register,
    refreshToken
}