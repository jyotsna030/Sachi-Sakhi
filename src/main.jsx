import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from "./components/custom/Header"
import GetAns from './Get-Ans/index.jsx'
import AshaBot from './Asha-Bot/index.jsx'
import Article3 from './Article/article3'
import Article1 from './Article/article1'
import Article2 from './Article/article2'
import Article4 from './Article/article4'
import Article5 from './Article/article5'
import Article6 from './Article/article6'
import Article7 from './Article/article7'
import Article8 from './Article/article8'
import Article9 from './Article/article9'
import Summarized from './Summarize-Article/Summarized'
import About from './About.jsx'
import Summarized1 from './Summarize-Article/summarized1'
import Summarized2 from './Summarize-Article/Summarized2'
import Summarized4 from './Summarize-Article/Summarized4'
import Summarized5 from './Summarize-Article/Summarized5'
import Summarized6 from './Summarize-Article/Summarized6'
import Summarized7 from './Summarize-Article/Summarized7'
import Summarized8 from './Summarize-Article/Summarized8'
import Summarized9 from './Summarize-Article/Summarized9'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Alert from './Alert'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Get-Ans',
    element:<GetAns/>
  },
  {
    path:'/Asha-Bot',
    element:<AshaBot/>
  },
  {
    path:'/Article3',
    element:<Article3/>
  },
  {
    path:'/Summarized',
    element:<Summarized/>
  },
  {
    path:'/About',
    element:<About/>
  },
  {
    path:'/Article1',
    element:<Article1/>
  },
  {
    path:'/Article2',
    element:<Article2/>
  },
  {
    path:'/Article4',
    element:<Article4/>
  },
  {
    path:'/Article5',
    element:<Article5/>
  },
  {
    path:'/Article6',
    element:<Article6/>
  },
  {
    path:'/Article7',
    element:<Article7/>
  },
  {
    path:'/Article8',
    element:<Article8/>
  },
  {
    path:'/Article9',
    element:<Article9/>
  },
  {
    path:'/Summarized1',
    element:<Summarized1/>
  },
  {
    path:'/Summarized2',
    element:<Summarized2/>
  },
  {
    path:'/Summarized4',
    element:<Summarized4/>
  },
  {
    path:'/Summarized5',
    element:<Summarized5/>
  },
  {
    path:'/Summarized6',
    element:<Summarized6/>
  },
  {
    path:'/Summarized7',
    element:<Summarized7/>
  },
  {
    path:'/Summarized8',
    element:<Summarized8/>
  },
  {
    path:'/Summarized9',
    element:<Summarized9/>
  },
  {
    path:'/Alert',
    element:<Alert/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <RouterProvider router={router}>
    <Header/>
    </RouterProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
