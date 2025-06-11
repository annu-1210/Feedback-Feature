import React, { useRef, useState } from "react";
import { CgAttachment } from "react-icons/cg";
import "./MediaUpload.css";

function MediaUpload({ onFileSelect, selectedFile }) {
  const inputRef = useRef(null);

  const handleFileUpload = () => {
    inputRef.current.click();
  };

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && onFileSelect) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="media-container">
      <div className="upload-content">
        <div className="fileDiv" onClick={handleFileUpload}>
          <CgAttachment /> <span>Attach</span>
          <input
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleFile}
            accept=".pdf,.doc,.docx,.txt,image/*"
          />
        </div>
        {selectedFile && (
          <div className="file-preview">
            <span className="file-name" title={selectedFile.name}>{selectedFile.name}</span>
            <button 
              className="remove-file" 
              onClick={(e) => {
                e.stopPropagation();
                if (onFileSelect) {
                  onFileSelect(null);
                }
              }}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaUpload;