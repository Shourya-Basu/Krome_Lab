import React, { useRef, useState } from "react";
import { Upload } from "lucide-react";

const Edit = ({fileRef, file,  message, setMessage  ,BClick, FileChange, tempo, setTempo, pitch, setPitch, tempoOrignal, settempoOrignal }) => {


  return (
    <>
      <div className="h-[30vw]">
        <div className="text-center text-3xl text-white font-Nunito">
          <h1>Import Audio File</h1>
        </div>

        <form>
          <div className="flex flex-col justify-center m-10 mx-[30vw] p-10 border-2 bg-white/70 rounded-3xl border-dashed border-gray-600">
            <input
              type="file"
              hidden
              accept="audio/*"
              ref={fileRef}
              onChange={FileChange}
            />

            <button
              className="bg-orange-700 text-white px-4 py-2 rounded-4xl text-2xl font-extrabold"
              type="button"
              onClick={BClick}
            >
              <span className="flex flex-row m-5 justify-around">
                <Upload size={40} strokeWidth={2.5} /> Upload Music
              </span>
            </button>
            <br />
            <br />
            <span className="text-center text-[18px] text-gray-600 font-medium ">
                Choose a music file {file.name}
            </span>
             <span className="text-center text-2xl text-red-600 font-medium ">{message}</span>
            <span className="text-center text-[20px] text-gray-500 font-medium">
              Maximum 10 MB file size
            </span>
          </div>
          <div className=" bg-white/70 p-10 flex text-center justify-around border-4 rounded-3xl mx-50">
            <div>
              <label className="font-Nunito text-[20px]">Orignal Tempo </label>
              <input
                type="text"
                min="50"
                max="200"
                value={tempoOrignal}
                className="text-center font-bold rounded-2xl w-30 bg-[#3F3F3F] text-white"
                
                onChange={(e) => settempoOrignal(e.target.value)}
              />
              </div>
              <div>
              <label className="font-Nunito text-[20px]">Target Tempo </label>
              <input
                type="text"
                min="50"
                max="200"
                className=" text-center font-bold rounded-2xl w-30 bg-[#3F3F3F] text-white"
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
              />
            </div>
            <div>
              <label className="font-Nunito text-[20px]">Pitch </label>
              <input
                type="range"
                min="-12"
                max="12"
                step="1"
                className="border-2"
                value={pitch}
                onChange={(e) => setPitch(e.target.value)}
              />
              <span className="font-bold px-2 p-y-1 fixed "> {pitch} </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
