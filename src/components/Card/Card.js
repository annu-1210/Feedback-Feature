import { React, useContext, useState } from "react";
import "./Card.css";
import Context from "../../context/Context";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MediaUpload from "../MediaUpload/MediaUpload";

function Card() {
  const { modalsContent, activeModal } = useContext(Context);
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!textareaValue && !selectedFile) {
      toast.warning('Please fill in the form or attach a file!', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
      });
      return;
    }

    try {
      setUploading(true);
      let downloadURL = null;

      if (selectedFile) {
        const storageRef = ref(storage, `uploads/${selectedFile.name}`);
        await uploadBytes(storageRef, selectedFile);
        downloadURL = await getDownloadURL(storageRef);
      }

      console.log("Form submitted:", {
        textareaValue,
        fileURL: downloadURL,
        fileName: selectedFile?.name
      });

      toast.success('Form submitted successfully! 🎉', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
      });

      setTextareaValue("");
      setSelectedFile(null);
    } catch (error) {
      toast.error('Error submitting form. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
      });
      console.error('Submit error:', error);
    } finally {
      setUploading(false);
    }
  };

  // Safely retrieve modal data with null check
  const modalData = modalsContent?.[activeModal] || {};

  // Safely handle attachment with null check
  const renderAttachment = () => {
    if (!modalData.attachment) return null;
    return (
      <MediaUpload 
        onFileSelect={handleFileSelect}
        selectedFile={selectedFile}
      />
    );
  };

  return (
    <section className="card-wrapper">
      <div className="card-container">
        <div className="card-head">
          <div className="head-span">
            <span>{modalData.header}</span>
          </div>
        </div>
        <div className="card-main">
          <form onSubmit={handleSubmit}>
            {modalData.name && <div className="name-field">{modalData.name}</div>}
            {modalData.email && <div className="email-field">{modalData.email}</div>}
            {modalData.mobile && <div className="mobileNo-field">{modalData.mobile}</div>}
            {modalData.dropdown && <div className="dropdown">{modalData.dropdown}</div>}
            <div className="textarea">
              {modalData.textareaHead}
              <div className="textarea-innerdiv">
                <textarea
                  name="textarea"
                  id="textarea"
                  rows="5"
                  className="text-section"
                  placeholder="Write here..."
                  value={textareaValue}
                  onChange={handleTextareaChange}
                />
                {renderAttachment()}
              </div>
            </div>
            {modalData.checkbox && <div className="checkbox">{modalData.checkbox}</div>}
            {modalData.emailVerify && <div className="email-verification">{modalData.emailVerify}</div>}
            {modalData.content && <div>{modalData.content}</div>}
            <div className="button-div">
              <button
                type="submit"
                className="form-button"
                disabled={(!textareaValue && !selectedFile) || uploading}
                style={{
                  backgroundColor: (textareaValue || selectedFile) && !uploading
                    ? "rgba(15, 15, 15, 1)"
                    : "rgb(146, 146, 146)"
                }}
              >
                {uploading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Card;
