
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { PlusCircleFilled, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import{ useForm , useFieldArray} from "react-hook-form"
import {Tag , Input} from 'antd';
import CoverImage from './CoverImage';

import { postStory } from '../../react-query/api/story';


const WriteStory = () => {
 
const storyMutation = useMutation( { mutationFn: (data) =>  postStory(data),
  onMutate: (variables) => {

    console.log('Mutation started:', variables);
    return { startTime: Date.now() };
  },
  onSuccess: (result, variables, context) => {
  console.log("success")
  console.log(result.data.data)
}, })
const [formStatus , setFormStatus] = useState(false)

const [characterName, setCharacterName] = useState('');
  const [imageurl  ,setImage] = useState(null)
  const [tag, setTag] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [rating, setRating] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

 
  const { register, handleSubmit, control, trigger ,setValue, formState, getValues,watch } = useForm({
    mode: 'onChange', // Trigger validation on change
    defaultValues: {
      image: '',
    },
  });
  
  const formData = watch(); 
const {fields:mainCharacters , append , remove} = useFieldArray({
  control , 
  name:"mainCharacters"
})
const {fields:tags , append:addTag , remove:removeTag} = useFieldArray({
  control , 
  name:"tags"
})
useEffect(()=>{
  setFormStatus(formState.isValid)
  
},[formState])

const tagPlusStyle = {
    background: "white",
    borderStyle: 'dashed',
  };

 
  const showTagInput = () => {
    setInputVisible(true);
  };
 

  const handleAddTag = () => {
    console.log(tag)
    if (tag && tags.findIndex((item) => item.name === tag)=== -1 ) {
     addTag({ name:tag })
    }
    setInputVisible(false);
   setTag('')
  };


  const handleAddCharacter = () => {
    
    if (characterName && mainCharacters.findIndex((item) => item.name === characterName) === -1) {
      append({ name: characterName});
    }
    setCharacterName('')
  };

const handleFormSubmit = async () =>{
const obj = new FormData()
obj.append("image",imageurl  )
obj.append('data' ,JSON.stringify(formData))
storyMutation.mutate(obj)

}



  return (
    <>
    {/* <TopHeader formState ={formState}/> */}
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <p className="text-gray-500 text-sm">Add Story Info</p>
          <h2 className="text-lg font-semibold">Untitled Story</h2>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="border border-gray-300 px-4 py-2 rounded-md">
          Cancel
        </button>
        <button onClick={handleFormSubmit} className="bg-orange-500 text-white px-4 py-2 rounded-md">
          {formStatus?'Next':'Skip'}
        </button>
      </div>
    </header>


   {/* <UploadForm  setFormState ={setFormState}/> */}
   <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0">
      <div className="flex flex-col items-center w-full h-1/2 md:w-1/4 p-2 border rounded bg-gray-100">

        <div className="w-full h-48 bg-gray-200 flex items-center justify-center border rounded">
        {/* <span className="text-gray-500">Add a cover</span>  */}
         <CoverImage  setImage={ setImage} />
          
          {/* <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input> */}
        </div>
      </div>
      <div className=" p-10 border rounded bg-white mx-10">
        <h2 className="text-xl font-bold mb-4">Story Details</h2>
        <div className="space-y-4">
        <form >


          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input {...register("title" , {required:"name is required"  } )}
              type="text"
              className="mt-1  w-full border rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"

            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea  {...register("description" , {required:" description is required"} )}
              className="mt-1 block w-full border rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Main Characters</label>
            <div className="flex  flex-col ">
            <div className='flex space-x-2 mt-5 mr-70 sm:mr-60  xl:mr-40'>
         
  <input 
                type="text"
                className=" mt-1 block w-full border rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => setCharacterName(e.target.value)}
            value={characterName}
              />

                        <Button onClick={handleAddCharacter} className='mt-1 px-3' type='text' shape="circle" icon={<PlusCircleFilled />} size={"large"} />

            </div>
          
             
            </div>
            <ul className="mt-2 list-disc list-inside">
      
              {mainCharacters.map((item , index) =>(
             
              <li> 
              <Tag className='text-lg font-mono mt-2' closeIcon key ={item.id} onClose={(e) => {
          e.preventDefault();
          remove(index)
        }} color='red'> 
       {item.name}  
      
    </Tag>
    </li>
   
             

              
              ))}
            </ul>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select {...register("category" ,{required:true}) }
              className="mt-1 block w-full border rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        
          
            >
              <option value="" >Select a category</option>
              <option value="Adventure">Adventure</option>
              <option value="Romance">Romance</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tags</label>
            <div className="flex space-x-2">
            {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
        
          value={tag}
          onChange={(e)=> setTag(e.target.value)}
          onBlur={handleAddTag}
          onPressEnter={handleAddTag}
      
        />
      ) : (
        <Tag onClick={showTagInput} style={tagPlusStyle}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
                {/* <Button   onClick={addTag} className='mt-1 px-3' type='text'
                       shape="circle" icon={<PlusCircleFilled />} size={"small"} /> */}

    
            </div>
            <ul className="mt-2 list-disc list-inside">
              {tags.map((item, index) => (
              <Tag className='rounded-lg text-sm' key={item.id}
        closable
        onClose={(e) => {
          e.preventDefault();
          removeTag(index)
        }}
      >{item.name}</Tag>
              ))}

            </ul>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Target Audience</label>
            <select {...register("targetAudience" ,{ required: true })}
              className="mt-1 block w-full border rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>Who is your primary audience?</option>
              <option value="Adults">Adults</option>
              <option value="Teens">Teens</option>

            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <select {...register("Language" ,{ required: true }) }
              className="mt-1 block w-full border rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"            
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Copyright</label>
            <select
              className="mt-1 block w-full border rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value="All Rights Reserved"
              disabled {...register("copyright")}
            >
              <option value="All Rights Reserved">All Rights Reserved</option>
            </select>
            <p className="mt-1 text-sm text-gray-500">You do not allow your work to be used or adapted in any way without your permission.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <div className="flex items-center mt-1">
              <span className="mr-2">Mature</span>
              <button
                type="button"
                className={`px-4 py-2 rounded shadow-sm focus:outline-none ${rating ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setRating(!rating)}
              >
                {rating ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default WriteStory;
