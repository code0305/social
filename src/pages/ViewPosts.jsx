import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { FaHeart, FaRegComment } from "react-icons/fa"
export default function MyPost() {
    const [post,setPost]=useState([]);
    const {getPost,deletePost}=useContext(UserContext)
    

    const fetchPost=async()=>{
        try {
            const res=await getPost()
            console.log(res.data.data)
            if(res.data.success){
                setPost(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchPost()
        console.log(post)
    },[])

    const baseurl = import.meta.env.VITE_BASE
  return (
    <div>
        <div>
            <h1 className=' bg-white text-black  rounded-xl  font-bold text-4xl m-8 p-5'>My Posts</h1>

        </div>

        <div className='flex flex-col gap-1 p-10 items-center'>
        {   post.map((item)=>(
                <div key={item._id} className="card bg-blue-100 text-black w-96 shadow-sm ">
                    <h2 className=" p-2 text-xl card-title">{item.userId?.name}</h2>
                    <figure>
                        {
                            item.media.map((pic,index)=>(
                                <img
                                key={index}
                                    src={`${baseurl}uploads/${pic.mediaUrl}`}
                                    alt="Shoes" 
                                    />
                            ))
                        }
                        
                    </figure>
                    <div className="card-body">
               
                        <p className='font-medium'>{item.caption}</p>
                        <div className="flex gap-6 items-center mt-3">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaHeart className="text-red-500 text-xl" />
                                <span>{item.likes?.length || 0}</span>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaRegComment className="text-xl" />
                                <span>{item.comments?.length || 0}</span>
                            </div>
                        </div>
                        <button onClick={()=>{deletePost(item._id)}} className="btn btn-info ml-auto w-25 text-white  bg-blue-600  ">Delete </button>
                    </div>
         
                </div>
            ))}
        </div>
    </div>
    
    )
}

