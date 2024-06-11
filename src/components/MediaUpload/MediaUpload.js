import React from "react";
import { useRef, useState } from "react";
import { CgAttachment } from "react-icons/cg";
import "./MediaUpload.css";

function MediaUpload() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleFileUpload = () => {
    inputRef.current.click();
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(e.target.files[0]);
  };

  return (
    <div className="media-container">
      <div className="fileDiv" onClick={handleFileUpload}>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="file-logo" />
        ) : null}
        <CgAttachment /> <span>Attach</span>
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleImage}
        />
      </div>
    </div>
  );
}

export default MediaUpload;
