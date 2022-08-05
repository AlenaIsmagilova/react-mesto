import styles from "../Header/Header.module.css";
import mestoLogo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={mestoLogo} alt="место" />
    </header>
  );
};

export default Header;
