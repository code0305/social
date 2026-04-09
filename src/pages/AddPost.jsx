import axios from 'axios'
import React, { useState } from 'react'

import { useContext } from 'react'
import UserContext from '../context/UserContext'
export default function AddPost() {
    const [caption,setCaption]=useState("")
    const [media,setMedia]=useState([])
    const [location,setLocation]=useState("")
    const { createPost } = useContext(UserContext);

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            
            // for(let i=0;i<media.length;i++){
            //     formData.append("media",media[i])
            // }
            console.log(media);
            const res=await createPost({caption,location,media})
            if(res.data.success){
                alert(res.data.message)
                setCaption("")
                setMedia([])
                setLocation("")
            }
            else
                console.log("Error in adding post")
        } catch (error) {
            console.log(error)
            alert("Error in creating Post")
        }
    }
  return (
    
    <div >
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
 <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
   <h1 className="text-2xl font-bold text-center text-gray-700">Add Post</h1>
   <form onSubmit={handleSubmit} className="space-y-4 mt-4" >
     <div>
       <label className="label">
         <span className="label-text">Caption</span>
       </label>
       <input
         type="text"
         placeholder="Enter the Caption"
         value={caption}
         onChange={(e)=>setCaption(e.target.value)}
         className="text-white input input-bordered input-primary w-full"
       />
     </div>
     <div>
       <label className="label">
         <span className="label-text">Caption</span>
       </label>
       <input
         type="text"
         placeholder="Enter the Location"
         value={location}
         onChange={(e)=>setLocation(e.target.value)}
         className="text-white input input-bordered input-primary w-full"
       />
     </div>
     <div>
       <label className="label">
         <span className="label-text">Image</span>
       </label>
       <input
         type="file"
         multiple
         onChange={(e)=>setMedia([...e.target.files])}
         placeholder="Enter your Image"
         className="input input-bordered input-primary   w-full"
       />
     </div>

     <button type="submit" className="btn btn-primary w-full mt-5">Submit</button>
   </form>
 </div>
</div>
    </div>
  )
}