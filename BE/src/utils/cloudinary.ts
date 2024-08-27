import { v2 as cloudinary } from 'cloudinary';
import env from '../config';
import multer from "multer"
import ApiError from '../Error/ApiError';
import e from 'express';


cloudinary.config({
    cloud_name: env.CLOUDINARY_NAME,
    api_key: env.CLOUDINARY_KEY,
    api_secret: env.CLOUDINARY_SECRET_KEY // Click 'View Credentials' below to copy your API secret
});


export const upload = multer({ storage: multer.memoryStorage() })


const uploader = async(file:any):Promise<String> =>{
   

        // Upload image to Cloudinary
       return  new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { resource_type: 'auto', folder: 'stoires' },
                (error: any, result: any) => {
                    if (error) {
                        reject(error)
                    } else {
                        console.log("success")
                        resolve(result.secure_url)
                    }
                }
            ).end(file.buffer);
        })

}

export const CloudinaryHelper = {
    upload , 
    uploader
}



