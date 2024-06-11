import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import Context from "../../context/Context";

function FabIcon() {
  const { showNav, setShowNav, setModalVisiblity } = useContext(Context);
  return (
    <div>
      {!showNav && (
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
  );
}

export default FabIcon;
