import React, { useState, Suspense } from "react";
import Layout from "../components/shared/Layout";
import Loading from "../components/keyword/Loading";
import styles from "./Keyword.module.css";
import acs from "../asset/ACS_keyword_result_v0.2.json";
import ljm from "../asset/LJM_keyword_result_v0.2.json";
import ysy from "../asset/YSY_keyword_result_v0.2.json";

const candidates = [
  { initialName: "ljm", name: "이재명", wordCloud: "ljmData" },
  { initialName: "ysy", name: "윤석열", wordCloud: "ysyData" },
  { initialName: "acs", name: "안철수", wordCloud: "acsData" },
];

const ljmData = [];
const ysyData = [];
const acsData = [];
for (let key in acs) {
  acsData.push({ text: key, value: acs[key] });
}
for (let key in ljm) {
  ljmData.push({ text: key, value: ljm[key] });
}
for (let key in ysy) {
  ysyData.push({ text: key, value: ysy[key] });
}
const WordClouds = React.lazy(() => import("../components/keyword/WordClouds"));

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
            이재명
            <WordClouds data={ljmData} />
            윤석열
            <WordClouds data={ysyData} />
            안철수
            <WordClouds data={acsData} />
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
