import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../asset/Korean_Voting_Stamp.svg";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
        <h1 className={styles.title}>대선 후보 지지율 예측</h1>
      </Link>
    </div>
  );
}

export default Header;
