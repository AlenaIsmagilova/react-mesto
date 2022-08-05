import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay.js";
import styles from "../Modal/Modal.module.css";
import { useEffect } from "react";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ handleClose, children, title, open }) => {
  useEffect(() => {
    function handleCloseOnEsc(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      window.addEventListener("keydown", handleCloseOnEsc);
      return () => {
        window.removeEventListener("keydown", handleCloseOnEsc);
      };
    }
  }, [open]);

  return ReactDOM.createPortal(
    <>
      {open && (
        <>
          <div className={styles.modalContainer} onKeyDown={handleClose}>
            <button
              className={styles.modalButtonClosed}
              onClick={handleClose}
              type="button"
            ></button>
            <h2 className={styles.modalTitle}>{title}</h2>
            {children}
          </div>
          <ModalOverlay close={handleClose} />
        </>
      )}
    </>,
    modalRoot
  );
};

export default Modal;
