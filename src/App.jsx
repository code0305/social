import React from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPost from './pages/AddPost'
import Viewposts from './pages/ViewPosts'
import AllPosts from './pages/AllPosts'
import MyPosts from './pages/MyPosts'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/login" element={<LoginPage/>}/>
      <Route path = "/register" element={<RegisterPage/>}/>
      <Route path = "/addpost" element={<AddPost/>}/>
      <Route path='/posts' element={<Viewposts/>}/>
      <Route path='/allposts' element={<AllPosts/>}/>
      <Route path='/myposts' element={<MyPosts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App