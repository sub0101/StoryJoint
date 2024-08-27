export interface LoginPayload {
    email: string;
    password: string;
  }
  
  export interface RegisterPayload {
    firstName:string,
    lastName:string,
    email: string;
    password: string;
  }

  export interface UserLoginReponse {
    id: string , 
    email:string ,
    accessToken :string
  }

  export interface IJwtPayload {
    id:string | undefined,
    email:string |undefined
  }
  export interface refreshTokenPayload {
    accessToken:string
  }

  export interface IStory {

      id: string | null; 
      image: string |null; 
      title: string | null; 
      description: string | null;
      category: string |null
      Language?: string | null
      targetAudience?: string | null
      Rating?: boolean | null
      chapters: Chapter[] | null;
      tags: string[] | null; 
      mainCharacters: string[] | null; 
    
  }
  interface Chapter {
    id: number; 
    chapterNumber :number;
    storyId: string | null; 
    name: string | null; 
   
  }