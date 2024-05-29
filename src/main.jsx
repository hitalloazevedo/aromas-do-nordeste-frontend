import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { HashRouter, RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter router={router}/>
)
