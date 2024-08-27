import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "../axios";


  export const getStory = () =>{
    const response = axiosPrivate.get("home/");
    return response
  }

  

export async  function  postStory(data) {
  console.log(data)
  const response =  await axiosPrivate.post("story/post"  ,data);
    return response
}

export function  UseUpdateStory() {
 
}

export function  UseDeleteStory() {

 
}

