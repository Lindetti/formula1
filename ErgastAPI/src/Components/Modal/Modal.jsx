import React, { useRef, useEffect, useState } from "react";
import "./Modal.scss";

const Modal = ({ show, handleClose, children, url, scrollPosition = 0 }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal">
        <div className="modal-content">
        <div className="closeDiv">
        <div className="close-icon" onClick={handleClose}>
        <span className="close-x">&times;</span>
</div>
        </div>
        {children}
        <div className="iframe-div"> 
        <iframe  src={url} title="Wikipedia" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;