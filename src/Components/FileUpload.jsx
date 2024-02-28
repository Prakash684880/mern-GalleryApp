import React from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const handleUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'json',
      });

      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error.message);
      alert('Error uploading file. Please try again.');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      handleUpload(file);
    },
  });

  return (
    <div className="App ">
      <div {...getRootProps()} className="dropzone border size-max w-[400px] h-[300px] flex flex-col justify-center items-center ">
        <input {...getInputProps()} />
        <p className="text-gray-500 font-semibold" >Drag 'n' drop a file here, or click to select a file</p>
      </div>
    </div>
  );
};

export default FileUpload;
