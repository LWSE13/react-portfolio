import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

import LandingPage from './components/LandingPage.jsx'
import AboutMe from './components/AboutMe.jsx' 
import Portfolio from './components/Portfolio.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />  
      },
      {
        path: '/about',
        element: <AboutMe />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);