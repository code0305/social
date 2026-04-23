import React from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPost from './pages/AddPost'
import Viewposts from './pages/ViewPosts'
import MyPosts from './pages/MyPosts'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<LoginPage/>}/>
      <Route path = "/register" element={<RegisterPage/>}/>
      <Route path = "/addpost" element={<AddPost/>}/>
      <Route path='/posts' element={<Viewposts/>}/>
      <Route path='/myposts' element={<MyPosts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App