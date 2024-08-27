import React, { useEffect, useRef, useState } from 'react';
import { PlusCircleFilled, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import{ useForm , useFieldArray} from "react-hook-form"
import {Tag , Input} from 'antd';
import CoverImage from './CoverImage';

const UploadForm = ( {setFormState}) => {
  const [characterName, setCharacterName] = useState('');
  const [imageurl  ,setImage] = useState('')
  const [tag, setTag] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [rating, setRating] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

 
  const { register, handleSubmit, control, trigger ,setValue, formState, getValues } = useForm({
    mode: 'onChange', // Trigger validation on change
    defaultValues: {
      image: '',
    },
  });
  

const {fields:mainCharacters , append , remove} = useFieldArray({
  control , 
  name:"mainCharacters"
})
const {fields:tags , append:addTag , remove:removeTag} = useFieldArray({
  control , 
  name:"tags"
})
useEffect(()=>{
  setFormState(formState.isValid)
  
},[formState])

const tagPlusStyle = {
    background: "white",
    borderStyle: 'dashed',
  };
const onSubmit = (data) => console.log(data)
 
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


  return (
    <>

     
    </>
  
  );
};

export default UploadForm;
