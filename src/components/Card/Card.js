import { React, useContext, useState } from "react";
import "./Card.css";
import Context from "../../context/Context";

function Card() {
  let { modalsContent, activeModal } = useContext(Context);

  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", textareaValue);
  };

  return (
    <section className="card-wrapper">
      <div className="card-container">
        <div className="card-head">
          <div className="head-span">
            <span>{modalsContent[activeModal].header}</span>
          </div>
        </div>
        <div className="card-main">
          <form>
            <div className="name-field">
              {modalsContent[activeModal].name}
            </div>
            <div className="email-field">
              {modalsContent[activeModal].email}
            </div>
            <div className="mobileNo-field">
              {modalsContent[activeModal].mobile}
            </div>
            {modalsContent[activeModal].dropdown ? (
              <div className="dropdown">
                {modalsContent[activeModal].dropdown}
              </div>
            ) : null}

            <div className="textarea">
              {modalsContent[activeModal].textareaHead}
              <div className="textarea-innerdiv">
                <textarea
                  name="textarea"
                  id="textarea"
                  rows="5"
                  cols="20"
                  className="text-section"
                  placeholder="Write here..."
                  value={textareaValue}
                  onChange={handleTextareaChange}
                />
                <div className="attachment-div">
                  {modalsContent[activeModal].attachment}
                </div>
              </div>
            </div>
            <div className="checkbox">
              {modalsContent[activeModal].checkbox}
            </div>
            <div className="email-verification">
              {modalsContent[activeModal].emailVerify}
            </div>
            <div>{modalsContent[activeModal].content}</div>
            <button
              type="submit"
              className="form-button"
              onClick={handleSubmit}
              disabled={!textareaValue}
              style={{
                backgroundColor: textareaValue
                  ? "rgba(15, 15, 15, 1)"
                  : "rgb(146, 146, 146)",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Card;
