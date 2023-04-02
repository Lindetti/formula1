import React, { useRef, useEffect, useState } from "react";
import "./Modal.scss";

const Modal = ({ show, handleClose, children, url }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";


  return (
    <div className={showHideClassName}>
      <div className="modal">
        <div className="modal-content">
        <button onClick={handleClose}>Close</button>
        {children}
        <iframe src={url} title="Wikipedia" />
        </div>
      </div>
    </div>
  );
};

export default Modal;