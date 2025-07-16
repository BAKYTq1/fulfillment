import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router/router'
import './styles/App.scss'
function App() {
  return (
    <div className='wrapper'>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
