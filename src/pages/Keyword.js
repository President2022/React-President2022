import React, { useState, Suspense, useEffect } from "react";
import Layout from "../components/shared/Layout";
import Loading from "../components/keyword/Loading";
import styles from "./Keyword.module.css";
// import Tooltip from "@mui/material/Tooltip";

import ljm from "../asset/data/LJM_result_v5.json";
import ysy from "../asset/data/YSY_result_v5.json";
import acs from "../asset/data/ACS_result_v5.json";

const WordClouds = React.lazy(() => import("../components/keyword/WordClouds"));
const candidates = [
  { name: "이재명", wordCloud: "ljmData" },
  { name: "윤석열", wordCloud: "ysyData" },
  { name: "안철수", wordCloud: "acsData" },
];

function Button({ target, onClick, name }) {
  return (
    <button className={target} onClick={onClick}>
      {name}
    </button>
  );
}

function Keyword() {
  const [candidate, setCandidate] = useState("전체");
  const onClick = (event) => {
    setCandidate(event.target.innerText);
  };

  const [ljmData, setLjmData] = useState([]);
  const [ysyData, setysyData] = useState([]);
  const [acsData, setacsData] = useState([]);

  useEffect(() => {
    const ljmArray = [];
    const ysyArray = [];
    const acsArray = [];

    for (let key in ljm) {
      ljmArray.push({ text: key, value: ljm[key] });
    }
    for (let key in ysy) {
      ysyArray.push({ text: key, value: ysy[key] });
    }
    for (let key in acs) {
      acsArray.push({ text: key, value: acs[key] });
    }

    setLjmData(ljmArray);
    setysyData(ysyArray);
    setacsData(acsArray);
  }, []);

  return (
    <Layout activeMenu="keyword">
      <h2>후보별 지지자들의 민심은?</h2>
      <Button
        target={candidate === "전체" ? styles.focused : null}
        onClick={onClick}
        name={"전체"}
      />
      {candidates.map((person, index) => (
        <Button
          target={candidate === person.name ? styles.focused : null}
          onClick={onClick}
          name={person.name}
          key={index}
        />
      ))}
      <Suspense fallback={<Loading />}>
        {candidate === "전체" ? (
          <div>
            <div className={styles.box}>
              <WordClouds data={ljmData} />
              <div className={styles.name}>이재명</div>
            </div>
            <div className={styles.box}>
              <WordClouds data={ysyData} />
              <div className={styles.name}>윤석열</div>
            </div>
            <div className={styles.box}>
              <WordClouds data={acsData} />
              <div className={styles.name}>안철수</div>
            </div>
          </div>
        ) : (
          <div>
            {candidate === "이재명" && <WordClouds data={ljmData} />}
            {candidate === "윤석열" && <WordClouds data={ysyData} />}
            {candidate === "안철수" && <WordClouds data={acsData} />}
          </div>
        )}
      </Suspense>
    </Layout>
  );
}
export default Keyword;
