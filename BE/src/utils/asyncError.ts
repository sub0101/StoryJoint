import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn:RequestHandler)=> async (req:Request , res:Response , next:NextFunction):Promise< void> =>{

    try{
        console.log("catchAsync")
        await fn(req  ,res,next );
    }
    catch(err) {
        console.log(err)
        next(err)
    }
}
export default catchAsync;