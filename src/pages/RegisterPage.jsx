import React, { useState } from 'react'
import UserContext from '../context/UserContext';
import {useContext} from 'react';
const RegisterPage = ()=>{
  const [form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    phone:""
  });

  const {handleRegister} = useContext(UserContext)

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit= async () => {
    try {
      handleRegister(form);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 max-h-full md:max-h-screen  bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Register</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label htmlFor="UserName" className="block text-sm/6 font-medium text-gray-100">
                UserName
              </label>
              <div className="mt-2">
                <input
                  id="UserName"
                  name="name"
                  type="text"
                  required
                  autoComplete="UserName"
                  onChange={handleChange}
                  value={form.name}
                  className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={handleChange}
                  value={form.email}
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
                  type="password"
                  onChange={handleChange}
                  value={form.password}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
              <div>
              <label htmlFor="Phone Number" className="block text-sm/6 font-medium text-gray-100">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  value={form.phone}
                  type="text"
                  required
                  autoComplete="Phone Number"
                  className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
        </div>
      </div>
    </>
  )
}


export default RegisterPage;