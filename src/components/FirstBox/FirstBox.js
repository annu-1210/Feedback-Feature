import React from "react";
import "./FirstBox.css";
import { IoEye } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function FirstBox() {
  return (
    <section className="first-wrapper">
      <div className="first-container">
        <div className="first-top">
          <div className="ft-left">
            <span className="first-span1">Design</span>
            <span className="first-span2">Technology</span>
          </div>
          <div className="ft-right">
            <img src="startup.png" alt="logo" width={40} />
            <span className="startup-span">startup</span>
          </div>
        </div>
        <div className="first-quesSpan">
          <span className="ques-span1">
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup?{" "}
          </span>
          <span className="ques-span2">
            Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
            viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
            donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
            magna cursus se?{" "}
          </span>
        </div>

        <div className="first-bottom">
          <div className="bottomLeft">
            <IoEye />
            <span className="bottomSpan1"> 100 Views</span>
          </div>
          <div className="bottomRight">
            <AiOutlineExclamationCircle />
            <span className="bottomSpan2">
              How should you word your answer?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstBox;
