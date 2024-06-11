import React, { useContext } from "react";
import "./FabModal.css";
import { HiFlag } from "react-icons/hi2";
import { HiThumbUp } from "react-icons/hi";
import { HiHandThumbDown } from "react-icons/hi2";
import { TbTextPlus } from "react-icons/tb";
import { RiQuestionAnswerFill } from "react-icons/ri";
import Context from "../../context/Context";

function FabModal() {
  const {
    modalVisiblity,
    setModalVisiblity,
    setActiveModal,
    userLogin,
    // setUserLogin,
  } = useContext(Context);

  return (
    <div
      className={`${
        modalVisiblity ? "fabNav-container-modalActive" : "fabNav-container"
      }`}
    >
      <div
        className={`${
          modalVisiblity ? "fabNav-icon-modalActive" : "fabNav-icon"
        }`}
        id="issue-box"
        onClick={() => {
          setModalVisiblity(true);
          userLogin ? setActiveModal(0) : setActiveModal(4);
        }}
      >
        <span
          className={`${
            modalVisiblity ? "fab-spans-modalActive" : "fab-spans"
          }`}
        >
          Report an Issue
        </span>
        <HiFlag className="fab-icons" size={40} />
      </div>
      <div
        className={`${
          modalVisiblity ? "fabNav-icon-modalActive" : "fabNav-icon"
        }`}
        id="shareFeed-box"
        onClick={() => {
          setModalVisiblity(true);
          userLogin ? setActiveModal(1) : setActiveModal(5);
        }}
      >
        <span
          className={`${
            modalVisiblity ? "fab-spans-modalActive" : "fab-spans"
          }`}
        >
          Share Feedback
        </span>
        <div className="thumb-icon fab-icons">
          <HiThumbUp />
          <HiHandThumbDown />
        </div>
      </div>
      <div
        className={`${
          modalVisiblity ? "fabNav-icon-modalActive" : "fabNav-icon"
        }`}
        id="suggestion-box"
        onClick={() => {
          setModalVisiblity(true);
          userLogin ? setActiveModal(2) : setActiveModal(6);
        }}
      >
        <span
          className={`${
            modalVisiblity ? "fab-spans-modalActive" : "fab-spans"
          }`}
        >
          Give Suggestion
        </span>
        <TbTextPlus className="fab-icons" size={40} />
      </div>
      <div
        className={`${
          modalVisiblity ? "fabNav-icon-modalActive" : "fabNav-icon"
        }`}
        id="contact-box"
        onClick={() => {
          setModalVisiblity(true);
          userLogin ? setActiveModal(3) : setActiveModal(7);
        }}
      >
        <span
          className={`${
            modalVisiblity ? "fab-spans-modalActive" : "fab-spans"
          }`}
        >
          Contact Us
        </span>
        <RiQuestionAnswerFill
          className={`${
            modalVisiblity ? "fab-icons-modalActive" : "fab-icons"
          }`}
          size={40}
        />
      </div>
    </div>
  );
}

export default FabModal;
