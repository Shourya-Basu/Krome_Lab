import React, { useRef, useState } from "react";
import Page_2 from "./Component/Page_2";
import Page_1 from "./Component/Page_1";
import { Navigate, Route, Routes, useNavigation } from "react-router-dom";


const App = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [tempo, setTempo] = useState();
  const [tempoOrignal, setTempoOrignal] = useState();
  const [pitch, setPitch] = useState(0);

  const BClick = () => {
    fileRef.current.click();
  };

  const FileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    const formData = new FormData();
    formData.append("music", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setMessage(data.message || data.error);
    } catch (err) {
      setMessage("Upload failed");
    }
  };

  const EXDownload = async () => {
    try {
      const response = await fetch("http://localhost:5000/download");

      if (!response.ok) {
        throw new Error("File not found");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "processed.wav"; 
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);

      setMessage("Download successful ");
    } catch (err) {
      console.error(err);
      setMessage("Download failed ");
    }
  };


  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Page_1
              fileRef={fileRef}
              file={file}
              message={message}
              setMessage={setMessage}
              BClick={BClick}
              FileChange={FileChange}
              EXDownload={EXDownload}
              tempo={tempo}
              setTempo={setTempo}
              pitch={pitch}
              setPitch={setPitch}
              tempoOrignal = {tempoOrignal}
              setTempoOrignal={setTempoOrignal}
            />
          }
        />
        <Route path="/MusicPlay" element={<Page_2 
        EXDownload={EXDownload}
        />} />
      </Routes>
    </>
  );
};

export default App;
