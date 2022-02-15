import { Link } from "react-router-dom";
import { ReactComponent as Stamp } from "../asset/Korean_Voting_Stamp.svg";
import styles from "./Home.module.css";
import { Paper } from "@mui/material";
// import Header from "../components/shared/Header";

function Home() {
  const now = new Date();
  const voteDate = new Date("2022-03-09T00:00:00+0900");
  const distance = voteDate.getTime() - now.getTime();
  const dDay = Math.floor(distance / (1000 * 60 * 60 * 24));

  return (
    <div className={styles.bg}>
      {/* <main className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.h2}>제20대 대통령 선거</h2>
          <h1 className={styles.h1}>D - {dDay}</h1>
          <hr className={styles.hr} />
          <p className={styles.p}>설명 어쩌구 저쩌구</p>
        </div> */}
      <Paper elevation={3} className={styles.paper}>
        <Link to="/about">
          <Stamp className={styles.stamp} />
        </Link>
      </Paper>
      {/* </main> */}
    </div>
  );
}
export default Home;
