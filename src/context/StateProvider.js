import { useState } from "react";
import React from "react";
import Context from "./Context.js";
import modalsContent from "../assets/modalContent.js";

const StateProvider = (props) => {
  const [userLogin, setUserLogin] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [modalVisiblity, setModalVisiblity] = useState(false);
  const [activeModal, setActiveModal] = useState(0);

  const openModal = (index) => {
    setActiveModal(index);
    setModalVisiblity(true);
  };

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
