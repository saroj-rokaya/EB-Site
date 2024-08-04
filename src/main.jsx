import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/home/Home.jsx'
import About from './Components/about/About.jsx'
import Contact from './Components/contact/Contact'  
import Courses from './Components/Courses/Courses'
import Error from './Components/Error/Error.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='courses' element={<Courses/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={ <Error/> }/>
      

    </Route>
    
  )    
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
