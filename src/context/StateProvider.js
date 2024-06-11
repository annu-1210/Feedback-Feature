import { useState } from "react";
import React from "react";
import Context from "./Context.js";
import DropDown from "../components/DropDown/DropDown.js";
import { FaStarOfLife } from "react-icons/fa";
import MediaUpload from "../components/MediaUpload/MediaUpload.js";

const StateProvider = (props) => {
  const [userLogin, setUserLogin] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [modalVisiblity, setModalVisiblity] = useState(false);
  const [activeModal, setActiveModal] = useState(0);

  const openModal = (index) => {
    setActiveModal(index);
    setModalVisiblity(true);
  };

  const modalsContent = [
    {
      header: (
        <div>
          Let us know about the{" "}
          <strong style={{ color: "black" }}>Issue</strong> you are facing right
          now!
        </div>
      ),
      dropdown: <DropDown />,
      textareaHead: (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            width: "398px",
            height: "18px",
            marginBottom: "10px",
            marginTop: "35px",
          }}
        >
          Describe the issue in detail
          <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
        </div>
      ),
      attachment: (
        <div
          style={{
            position: "relative",
            top: "33px",
            left: "10px",
          }}
        >
          <MediaUpload />
        </div>
      ),
    },
    {
      header: (
        <div>
          Let us know your <strong style={{ color: "black" }}>Feedback</strong>{" "}
          about us!
        </div>
      ),
      checkbox: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "398px",
            height: "20px",
            gap: "8px",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "16px",
          }}
        >
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            style={{
              width: "20px",
              borderRadius: "4px",
              border: "2px solid rgba(128, 128, 128, 1)",
            }}
          />
          <label>Send feedback anonymously</label>
        </div>
      ),
      attachment: (
        <div
          style={{
            position: "relative",
            top: "33px",
            left: "10px",
          }}
        >
          <MediaUpload />
        </div>
      ),
    },

    {
      header: (
        <div>
          Share your <strong style={{ color: "black" }}>Suggestions</strong>{" "}
          with us for a chance to earn rewards!
        </div>
      ),

      dropdown: <DropDown />,
      textareaHead: (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            width: "398px",
            height: "18px",
            marginBottom: "10px",
            marginTop: "35px",
          }}
        >
          Describe the suggestion in detail
          <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
        </div>
      ),
      attachment: (
        <div
          style={{
            position: "relative",
            top: "33px",
            left: "10px",
          }}
        >
          <MediaUpload />
        </div>
      ),
    },
    {
      header: (
        <div>
          Get in <strong style={{ color: "black" }}>Contact</strong> with us for
          your queries!
        </div>
      ),
      name: (
        <div
          style={{
            marginTop: "1rem",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "18px",
            textAlign: "left",
            width: "398px",
            height: "78px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: "0px",
          }}
        >
          <label>Your Name </label>
          <input
            type="text"
            placeholder="Enter your Name"
            style={{
              outline: "none",
              width: "398px",
              height: "42px",
              padding: "12px 16px",
              gap: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(204, 204, 204, 1)",
              background: "rgba(224, 224, 224, 1)",
              opacity: "0px",
              fontFamily: '"Poppins", sans-serif',
              fontSize: " 18px",
              fontWeight: 500,
              lineHeight: "18px",
              textAlign: " left",
            }}
          />
        </div>
      ),
      textareaHead: (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            width: "398px",
            height: "18px",
            marginBottom: "10px",
            marginTop: "35px",
          }}
        >
          What would you like to ask?
          <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
        </div>
      ),
    },
    {
      header: (
        <div>
          Let us know about the{" "}
          <strong style={{ color: "black" }}>Issue</strong> you are facing right
          now!
        </div>
      ),
      dropdown: <DropDown />,
      textareaHead: (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            width: "398px",
            height: "18px",
            marginBottom: "10px",
            marginTop: "35px",
          }}
        >
          Describe the issue in detail
          <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
        </div>
      ),
      emailVerify: (
        <div
          style={{
            width: "398px",
            height: "72px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: "0px",
            marginTop: "2rem",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "18px",
          }}
        >
          <label
            style={{
              textAlign: "left",
              width: "341px",
              height: "18px",
              gap: " 0px",
              opacity: "0px",
              color: "rgba(77, 77, 77, 1)",
            }}
          >
            Enter your email to receive an update
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            style={{
              width: "398px",
              height: "42px",
              padding: " 12px 16px",
              gap: "8px",
              borderRadius: "8px",
              opacity: "0px",
              border: "1.5px solid rgba(153, 153, 153, 1)",
              outline: "none",
              color: "rgba(128, 128, 128, 1)",
            }}
          />
        </div>
      ),
      attachment: (
        <div
          style={{
            position: "relative",
            top: "33px",
            left: "10px",
          }}
        >
          <MediaUpload />
        </div>
      ),
    },
    {
      header: (
        <div>
          Let us know your <strong style={{ color: "black" }}>Feedback</strong>{" "}
          about us!
        </div>
      ),
      emailVerify: (
        <div
          style={{
            width: "398px",
            height: "72px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: "0px",
            marginTop: "2rem",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "18px",
          }}
        >
          <label
            style={{
              textAlign: "left",
              width: "365px",
              height: "18px",
              opacity: "0px",
              color: "rgba(77, 77, 77, 1)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Enter your email to receive an update{" "}
            <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            style={{
              width: "398px",
              height: "42px",
              padding: " 12px 16px",
              gap: "8px",
              borderRadius: "8px",
              opacity: "0px",
              border: "1.5px solid rgba(153, 153, 153, 1)",
              outline: "none",
              color: "rgba(128, 128, 128, 1)",
            }}
          />
        </div>
      ),
      attachment: (
        <div
          style={{
            position: "relative",
            top: "33px",
            left: "10px",
          }}
        >
          <MediaUpload />
        </div>
      ),
    },

    {
      header: (
        <div>
          Share your <strong style={{ color: "black" }}>Suggestions</strong>{" "}
          with us for a chance to earn rewards!
        </div>
      ),

      dropdown: <DropDown />,
      textareaHead: (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            width: "398px",
            height: "18px",
            marginBottom: "10px",
            marginTop: "35px",
          }}
        >
          Describe the suggestion in detail
          <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
        </div>
      ),
      emailVerify: (
        <div
          style={{
            width: "398px",
            height: "72px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: "0px",
            marginTop: "2rem",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "18px",
          }}
        >
          <label
            style={{
              textAlign: "left",
              width: "341px",
              height: "18px",
              gap: " 0px",
              opacity: "0px",
              color: "rgba(77, 77, 77, 1)",
            }}
          >
            Enter your email to receive an update
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            style={{
              width: "398px",
              height: "42px",
              padding: " 12px 16px",
              gap: "8px",
              borderRadius: "8px",
              opacity: "0px",
              border: "1.5px solid rgba(153, 153, 153, 1)",
              outline: "none",
              color: "rgba(128, 128, 128, 1)",
            }}
          />
        </div>
      ),
      attachment: (
        <div
          style={{
            position: "relative",
            top: "33px",
            left: "10px",
          }}
        >
          <MediaUpload />
        </div>
      ),
    },
    {
      header: (
        <div>
          Get in <strong style={{ color: "black" }}>Contact</strong> with us for
          your queries!
        </div>
      ),
      name: (
        <div
          style={{
            marginTop: "1rem",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "18px",
            textAlign: "left",
            width: "398px",
            height: "78px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: "0px",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Your Name{" "}
            <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            style={{
              outline: "none",
              width: "398px",
              height: "42px",
              padding: "12px 16px",
              gap: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(204, 204, 204, 1)",
              background: "rgba(224, 224, 224, 1)",
              opacity: "0px",
              fontFamily: '"Poppins", sans-serif',
              fontSize: " 18px",
              fontWeight: 500,
              lineHeight: "18px",
              textAlign: " left",
            }}
          />
        </div>
      ),
      email: (
        <div
          style={{
            marginTop: "1rem",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "18px",
            textAlign: "left",
            width: "398px",
            height: "78px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: "0px",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Your Email{" "}
            <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            style={{
              outline: "none",
              width: "398px",
              height: "42px",
              padding: "12px 16px",
              gap: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(204, 204, 204, 1)",
              background: "rgba(224, 224, 224, 1)",
              opacity: "0px",
              fontFamily: '"Poppins", sans-serif',
              fontSize: " 18px",
              fontWeight: 500,
              lineHeight: "18px",
              textAlign: " left",
            }}
          />
        </div>
      ),
      mobile: (
        <div
          style={{
            marginTop: "1rem",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "18px",
            textAlign: "left",
            width: "398px",
            height: "78px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: "0px",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            Your Mobile number{" "}
            <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
          </label>
          <input
            type="number"
            placeholder="Enter your number"
            style={{
              outline: "none",
              width: "398px",
              height: "42px",
              padding: "12px 16px",
              gap: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(204, 204, 204, 1)",
              background: "rgba(224, 224, 224, 1)",
              opacity: "0px",
              fontFamily: '"Poppins", sans-serif',
              fontSize: " 18px",
              fontWeight: 500,
              lineHeight: "18px",
              textAlign: " left",
            }}
          />
        </div>
      ),
      textareaHead: (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            width: "398px",
            height: "18px",
            marginBottom: "10px",
            marginTop: "35px",
          }}
        >
          What would you like to ask?
          <FaStarOfLife style={{ color: "rgb(244, 52, 52)" }} size={8} />
        </div>
      ),
    },
  ];

  return (
    <Context.Provider
      value={{
        showNav,
        setShowNav,
        modalVisiblity,
        setModalVisiblity,
        modalsContent,
        activeModal,
        setActiveModal,
        openModal,
        userLogin,
        setUserLogin,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
