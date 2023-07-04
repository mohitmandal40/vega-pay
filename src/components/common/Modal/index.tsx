import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [returnContent, setReturnContent] = useState(isOpen);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      setReturnContent(isOpen);
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setReturnContent(isOpen);
      }, 300);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const modal = (
    <div className={classes.modalContainer}>
      <div className={classes.backdrop} onClick={onClose} />
      <div
        className={`${classes.modal} ${isOpen ? classes.show : classes.hide}`}
      >
        <h2>Modal Title</h2>
        <div className={classes.modalContent}>{children}</div>
        <button className={classes.modalClose} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );

  if (returnContent) {
    return ReactDOM.createPortal(
      modal,
      document.getElementById("portal") as Element
    );
  } else {
    return null;
  }
};

export default Modal;
