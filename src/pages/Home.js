import { Link } from "react-router-dom";
import { ReactComponent as Stamp } from "../asset/Korean_Voting_Stamp.svg";
import styles from "./Home.module.css";
import { Paper } from "@mui/material";
import Typist from "react-typist";

function Home() {
  return (
    <div className={styles.bg}>
      <div className={styles.box}>
        <h1 className={styles.h1}>대선 후보 지지율 예측</h1>
        <hr className={styles.hr} />
        <Typist avgTypingDelay={120} cursor={{ show: false }}>
          텍스트로 예측해본 후보별 지지율
        </Typist>
        <br />▼
      </div>
      <Paper elevation={3} className={styles.linkto}>
        <Link to="/graph">
          <Stamp className={styles.stamp} />
        </Link>
        2022.3.9 투표 꾹 !
      </Paper>
    </div>
  );
}
export default Home;
