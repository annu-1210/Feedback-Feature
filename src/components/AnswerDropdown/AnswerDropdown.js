import React from "react";
import "./AnswerDropdown.css";
import { IoMdArrowDropdown } from "react-icons/io";

function AnswerDropdown() {
  return (
    <section className="ans-wrapper">
      <div className="ans-container">
        <div className="a-left">
          <span>Answers &#40;23&#41;</span>
        </div>
        <div className="a-right">
          <span className="sorting-span">Sort By: </span>
          <button className="mid-button">
            Popular
            <span>
              <IoMdArrowDropdown size={25}/>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AnswerDropdown;
