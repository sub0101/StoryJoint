import { NextFunction ,Request , Response} from "express";
import { verifyToken } from "../../utils/jwt";
import catchAsync from "../../utils/asyncError";
import ApiError from "../../Error/ApiError";
import httpStatus from "http-status";

export const verifyAuth =  catchAsync( async (req :Request, res:Response , next:NextFunction)=>{

    let  token :string |any =    req.headers.authorization;
    console.log(token)
 if (!token?.startsWith('Bearer ')) throw new ApiError(httpStatus.UNAUTHORIZED , "TOKEN NOT FOUND")
   token  = token.split(' ')[1];
   
   if(!token) throw new ApiError(httpStatus.UNAUTHORIZED , "accessToken token is undefined")
    const data =  await verifyToken(token)
  
   if(!data) throw new ApiError(httpStatus.UNAUTHORIZED, "Something Wrong")
    req.user = data;

    next()   
})