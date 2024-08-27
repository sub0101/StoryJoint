import httpStatus from "http-status";
import { IStory } from "../../../interfaces";
import catchAsync from "../../../utils/asyncError"
import { StoryService } from "./story.service"
import sendResponse from "../../../shared/sendResponse";

const  postStory = catchAsync( async(req,res ) =>{

    const result =  await StoryService.postStory(req);
    sendResponse<IStory>(
        res,
        {
            statusCode: httpStatus.OK,
            success: true,
            message: "sucess",
            data: result

        })
})

export const StoryController = 
{
    postStory
}