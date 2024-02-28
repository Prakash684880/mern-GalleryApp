import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import FileUpload from './Components/FileUpload'
import UploadedFiles from './Components/UploadedFiles'

const App = () => {
  return (
    <div className='container mx-auto '> 
          <div className='sticky top-0 bg-white pb-4 z-10 '>
              <Navbar/>
              <Header/>
          </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-12'>
          <FileUpload />
          <UploadedFiles />
      </div>

    </div>
   
  )
}

export default App
