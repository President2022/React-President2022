import Layout from "../components/shared/Layout";
import styles from "./About.module.css";
// import {
//   candidate1,
//   candidate2,
//   candidate3,
//   candidate4,
// } from "../asset/image/";
// import { candidate3 } from "../asset/image/candidate3.gif";

function About() {
  const candidate = ["이재명", "윤석열", "심상정", "안철수"];
  return (
    <Layout style={{ padding: "1rem 0" }}>
      <div>
        <h2 className={styles.h2}>프로젝트 설명</h2>
        <p>프로젝트 설명에 대한 내용</p>
        {candidate.map((person, index) => (
          <img src={`../../asset/image/candidate${index}.gif`} alt={person} />
        ))}
        {/* <img src={require("../asset/image/candidate3.gif").default} /> */}
      </div>
    </Layout>
  );
}
export default About;
