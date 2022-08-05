import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerCopyright}>&copy; 2022 Mesto Russia</p>
    </footer>
  );
};

export default Footer;
