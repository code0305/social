import UserContext from "../../context/UserContext"
import axios from "axios"

axios.defaults.withCredentials=true
const UserProvider = ({children}) => {
    //global states

    const BaseUrl=import.meta.env.VITE_BASE
    //global functions
    const handleRegister = async(data)=>{
    try {
        await axios.post(`${BaseUrl}auth/register`,data);
    } catch (error) {
        console.log(error)
    } 
    }

    const handleLogin =async(data)=>{
        try {
            await axios.post(`${BaseUrl}auth/login`,data);
        } catch (error) {
            console.log(error);
        }
    }

    const createPost = async({caption,location,media})=>{
        try {
            const formData=new FormData();
            if(!caption || !media||!location||media.length==0){
                return alert("All fields are required");
            }
            formData.append("caption",caption);
            
            formData.append("location",location);
            media.forEach((file)=>{
              formData.append("media",file)
            })

            const res = await axios.post(`${BaseUrl}post/create`,formData,{
                withCredentials:true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }

            });
            return res;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
        const deletePost=async(id)=>{
        try {
            const res=await axios.delete(`${BaseUrl}post/deletepost/${id}`)
            console.log(res.data)
            if(res.data.success){
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getPost = async () => {
        try {
            const res = await axios.get(`${BaseUrl}post/all`);
            return res;
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    const myPost = async () => {
        try {
            const res = await axios.get(`${BaseUrl}post/user`);
            return res;
        } catch (error) {
            console.log(error.response)
            throw error
        }
    }

    const value = {
        //all states and functions
        handleRegister,
        handleLogin,
        createPost,
        deletePost,
        getPost,
        myPost
    }
  return (
    <UserContext.Provider value={value}>
            {children}
    </UserContext.Provider>
  )
}

export default UserProvider;