import React from "react";
import "./BackSection.css";
import { IoArrowBack } from "react-icons/io5";

function BackSection() {
  return (
    <section className="b-wrapper">
      <div className="b-container">
        <IoArrowBack size={50} />
        <span className="back-span">Back to Questions</span>
      </div>
    </section>
  );
}

export default BackSection;
