import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
const audioUrl = `http://localhost:5000/play?t=${Date.now()}`;

const Page_2 = ({EXDownload}) => {

  const Nav = useNavigate();

  const Back =() => {
    Nav("/home")
  }
  const video = document.querySelector("#bgVideo");

  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    video.play();
    video.playbackRate = 0.5;
  }, []);



  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            id="vid"
            src="171912-846103594_medium.mp4"
            type="video/mp4"
            
          ></source>
        </video>

        <div className=" flex flex-row relative h-screen">
          <div className=" absolute bottom-5 w-full flex justify-around  p-6">
            <div >
              <button
                type="button"
                onClick={EXDownload}
                hidden
              >  
                Download</button>
            </div>
            <div>
              <audio className="w-196" autoPlay controls loop>
                <source src={audioUrl} type="audio/wav"/>
              </audio>
            </div>
            <div className="bg-orange-700 text-white px-4 py-2 rounded-2xl text-2xl font-bold">
              <button
                type='Button'
                onClick={Back}
              >back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_2;
