
import { Request ,Response } from "express"
import catchAsync from "../../../utils/asyncError"
import ApiError from "../../../Error/ApiError"
import httpStatus from "http-status"
const getAllStory =  catchAsync( async (req:Request ,res:Response)=>{

return res.json(true)
}
)

export const HomeController = {
   getAllStory
}