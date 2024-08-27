import React, { useRef, useState } from 'react';
import Editor from './Editor';
import Quill from "quill"
import { EditorComponent, HeaderComponent } from './HeaderComponent';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Input } from 'antd';
import Header2 from './Header2';

const AddChapter = () => {
    const modules = {
        toolbar:[
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [ 'link', 'image', 'video', 'formula' ],          // add's image support
            [{ 'color': [] }, { 'background': [] }],        
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                        
        ],      
        clipboard: {
           
            matchVisual: false,
        }
    };

    return (
        <>
            <Header2 />
            <EditorComponent />
            <div className='flex        flex-col items-center justify-center mt-2 p-5 mb-10'>
                <Input className='rounded-sm  border border-none text-center font-bold text-5xl ' defaultValue="Untitled   " />
                <ReactQuill
                    className="h-96 items-center w-auto "
                    theme='snow'
                    formats={['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video']}
                    placeholder="Write something amazing..."
                    modules={modules}
                />
            </div>
    

        </>
    );
};

export default AddChapter;