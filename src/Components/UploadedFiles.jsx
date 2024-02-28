import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {RiDeleteBinLine} from 'react-icons/ri'

const UploadedFiles = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    useEffect(() => {
      fetchFiles();
    }, []);
  
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/files');
        setUploadedFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error.message);
      }
    };
    
    return (
          <>
            {uploadedFiles.map((file) => (
              <div key={file._id} className="relative overflow-hidden group curser-pointer">
                {file.originalName.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/) ? (
                  <img src={`http://localhost:3001/${file.filePath}`} alt={file.originalName} className="w-full h-[250px] rounded-lg object-cover" />
                ) : (
                  <a href={`http://localhost:3001/${file.filePath}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {file.originalName}
                  </a>
                )}
                <div 
                className='absolute w-full transition-transform 
                duration-500 
                group-hover:translate-y-0 translate-y-8
                bottom-0 left-0 py-1 grid place-items-center bg-[#00000060]
                '> 
                     <div className='flex items-center gap-2 text-red-600'>
                        <RiDeleteBinLine/>
                        Remove
                    </div>
                </div>
              </div>
              
            ))}
          </>
      );
};

export default UploadedFiles;
