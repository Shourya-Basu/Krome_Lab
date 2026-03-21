import React from 'react'
import { useNavigate } from "react-router-dom";


const Button = ({EXProcess, file, EXDownload}) => {

    const nav = useNavigate();

    const Play = () => {
    if (!file) {
        alert("⚠️ No file uploaded!");
    }else {
        EXProcess()
        nav("/MusicPlay"); 
  }
    return;
     
        
  };
  return (
    <>
        <div className="flex justify-around py-5">
            <button className="bg-orange-700 text-white px-6 py-3 rounded-4xl font-bold"
                type='button'
                onClick={EXDownload}
            >
                Download
            </button>

            <button className="bg-orange-700 text-white px-6 py-3 rounded-4xl font-bold"
                type='Button'
                onClick={Play}
            >
                Play
            </button>
        </div>
    </>
  )
}

export default Button