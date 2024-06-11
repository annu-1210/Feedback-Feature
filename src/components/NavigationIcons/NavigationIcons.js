import React from "react";
import "./NavigationIcon.css";
import { HiFlag } from "react-icons/hi2";
import { HiThumbUp } from "react-icons/hi";
import { HiHandThumbDown } from "react-icons/hi2";
import { TbTextPlus } from "react-icons/tb";
import { RiQuestionAnswerFill } from "react-icons/ri";

function NavigationIcons() {
  return (
    <section className="icons-box">
      <div className="iconsbox-container">
        <div className="Icons">
          <HiFlag className="Icons-icons" />
        </div>
        <div className="Icons">
          <div className="thumb-icon Icons-icons">
            <HiThumbUp size={80} />
            <HiHandThumbDown size={60} />
          </div>
        </div>
        <div className="Icons">
          <TbTextPlus className="Icons-icons" />
        </div>
        <div className="Icons">
          <RiQuestionAnswerFill className="Icons-icons" />
        </div>
      </div>
    </section>
  );
}

export default NavigationIcons;
