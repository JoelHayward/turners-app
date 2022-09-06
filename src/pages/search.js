// import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import './search.css'

export default function Search() {
  const [image, setImage] = useState(null);

  //UPLOAD THE IMAGE TO SERVER
  // const handleUpload = () => {
  //   console.log("Handle Upload");
  //   axios.post("http://localhost:4000/image-upload", image);
  // };

  // const getFileInfo = (e) => {
  //   console.log("File info");
  //   console.log(e.target.files[0]);
  //   const formData = new FormData();
  //   formData.append("my-image-file", e.target.files[0], e.target.files[0].name);
  //   setImage(formData);
  // };

//Drop zone image




  return (
    <div>
      {/* <div className="header">
        <img src={logo} alt="logo"></img>
        <div className="contact-head">
          <p>0800 887 637</p>
          <p>Find Us</p>
        </div>
      </div>
      <nav className="navbar">
        <Link className="link" to="/">Home</Link>
      </nav>
      
      <div className="searchsection">
      // <div className="dropzone">
      //   {/* <div className="dropzone-thumb" data-label="myFile.txt"></div> */}
          {/* <span className="dropzone__promt">Drop file here or click to upload</span>
          <input className="drop-zone-input" name="myFile" type="file" onChange={getFileInfo}></input>
        </div> */}
      
      {/* </div>
      <div>
        <input className="choosefile" type="file" onChange={getFileInfo}></input>
        <button className="sendfile" onClick={handleUpload}>Upload Image</button>
        </div>
      <div>
        <img className="footer" src={footer} alt="footer"></img>
      </div>
       */}
    </div>
  );
} 
