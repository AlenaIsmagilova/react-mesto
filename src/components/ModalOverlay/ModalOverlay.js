import { useEffect } from "react";
import styles from "../ModalOverlay/ModalOverlay.module.css";

const ModalOverlay = ({ close }) => {
  return <div className={styles.modalOverlay} onClick={close}></div>;
};

export default ModalOverlay;
