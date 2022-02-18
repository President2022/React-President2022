import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../asset/Korean_Voting_Stamp.svg";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <h1 className={styles.title}>대선 후보 지지율 예측</h1>
    </div>
  );
}

export default Header;
