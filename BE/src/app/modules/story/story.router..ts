import express from "express"
import { StoryController } from "./story.controller"
import { verifyAuth } from "../../middlewares/auth"
import { CloudinaryHelper } from "../../../utils/cloudinary"
const router = express.Router()

router.post("/post" , verifyAuth, CloudinaryHelper.upload.single('image'), StoryController.postStory)
export const StortRouter  = router



