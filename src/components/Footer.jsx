import styles from "./Sidebar.module.css";
function Footer() {
  return (
    <>
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </>
  );
}

export default Footer;
