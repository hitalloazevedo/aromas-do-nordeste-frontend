import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { RouterProvider, HashRouter } from 'react-router-dom'
import router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter router={router}/>
)
