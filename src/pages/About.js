import Layout from "../components/shared/Layout";
import "./About.module.css";
import Candidate1 from "../asset/image/candidate1.gif";
import Candidate2 from "../asset/image/candidate2.gif";
import Candidate3 from "../asset/image/candidate3.gif";
// import Candidate4 from "../asset/image/candidate4.gif";

function About() {
  const candidate = [
    { src: Candidate1, alt: "이재명" },
    { src: Candidate2, alt: "윤석열" },
    { src: Candidate3, alt: "심상정" },
    // { src: Candidate4, alt: "안철수" },
  ];
  return (
    <Layout activeMenu="about">
      <div>
        <h2>빅데이터로 살펴본 대선후보 지지율은?</h2>
        <p>빅데이터로 여론조사는 대부분 전화조사로</p>
        {candidate.map((person, index) => (
          <img src={person.src} loading="lazy" alt={person.alt} key={index} />
        ))}
      </div>
    </Layout>
  );
}
export default About;
