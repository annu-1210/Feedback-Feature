import React, { useContext } from "react";
import "./FloatingActionButton.css";
import { FaFileSignature } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import FabModal from "../FAB_Modal/FabModal";
import Context from "../../context/Context";
import Card from "../Card/Card";
function FloatingActionButton() {
  const { showNav, setShowNav, modalVisiblity, setModalVisiblity } =
    useContext(Context);

  return (
    <section className="fab-wrapper">
      <div className="fab-container">
        {!showNav ? (
          <div className="fab-button">
            <FaFileSignature size={40} onClick={() => setShowNav(true)} />
          </div>
        ) : (
          <div className="fab-button-cancel">
            <RxCross1
              size={40}
              onClick={() => {
                setShowNav(false);
                setModalVisiblity(false);
              }}
            />
          </div>
        )}
      </div>
      {modalVisiblity && (
        <div className="FAB-Navigation-menu">
          <FabModal />
        </div>
      )}
      {showNav && (
        <div className={`${modalVisiblity ? 'fabNav-section-box-ModalActive' :'fabNav-section-box'}`}>
          <FabModal />
        </div>
      )}
      {modalVisiblity && <Card />}
    </section>
  );
}

export default FloatingActionButton;
