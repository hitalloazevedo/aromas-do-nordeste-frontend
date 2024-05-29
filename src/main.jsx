import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashChangeEvent router={router}/>
)
