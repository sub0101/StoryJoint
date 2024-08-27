import { IStory } from "../../../interfaces"
import prisma from "../../../shared/prisma"
import { CloudinaryHelper } from "../../../utils/cloudinary"
import { Request } from "express"
const postStory = async (req:Request) :Promise<IStory> =>{
    console.log(req.body.data)
    const data = JSON.parse(req.body.data);
    const  image = req.file
    const imageUrl = image && await CloudinaryHelper.uploader(image)
    data.image = imageUrl || "none"
  
    const characterNames = data.mainCharacters.map((character:any) => character.name);
    const tags = data.tags.map((tag:any) => tag.name);
    const storyData = {...data , mainCharacters:characterNames , tags :tags}
    const story:IStory = await prisma.story.create({
        data:storyData,
        include:{
            chapters:true
        }
        
    })

    return story


}

export const StoryService = {
    postStory
}