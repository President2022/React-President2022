import { Link } from "react-router-dom";
import logo from "../data/Korean_Voting_Stamp.svg";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.h2}>제20대 대통령 선거</h2>
        <h1 className={styles.h1}>D - 24</h1>
        <p className={styles.ㅔ}>설명 어쩌구 저쩌구</p>
      </div>
      <Link to="/about">
        <img src={logo} className={styles.stamp} alt="logo" />
      </Link>
    </main>
  );
}
export default Home;
