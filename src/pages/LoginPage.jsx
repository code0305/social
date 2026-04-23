import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';
const LoginPage = ()=>{
  const {handleLogin}=useContext(UserContext);
  const [data,setData]=useState({
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      await handleLogin(data);
    } catch (error) {
      console.log("Login Error :"+error);
    }
  }
  return (
    <>
      <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 max-h-full md:max-h-screen  bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Login Page</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 btn btn-accent"
              >
                Sign in
              </button>
                            <Link to="/register" className="text-sm/6 font-medium text-indigo-400 hover:text-indigo-300">
                    Don't have an account? Sign Up
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}


export default LoginPage;
