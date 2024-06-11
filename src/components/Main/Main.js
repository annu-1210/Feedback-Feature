import React from "react";
import "./Main.css";
import BackSection from "../BackSection/BackSection";
import FirstBox from "../FirstBox/FirstBox";
import SecondBox from "../SecondBox/SecondBox";
import AnswerDropdown from "../AnswerDropdown/AnswerDropdown";

function Main() {
  return (
    <>
      <BackSection />
      <section className="m-wrapper">
        <div className="m-container">
          <FirstBox />
          <AnswerDropdown />
          <SecondBox />
        </div>
      </section>
    </>
  );
}

export default Main;
