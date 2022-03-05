import Layout from "../components/shared/Layout";
import "./About.module.css";
import Candidate1 from "../asset/image/candidate1.gif";
import Candidate2 from "../asset/image/candidate2.gif";
import Candidate3 from "../asset/image/candidate3.gif";
// import Candidate4 from "../asset/image/candidate4.gif";
function Subtitle(context) {
  return <span>{context}</span>;
}
function About() {
  // const candidate = [
  //   { src: Candidate1, alt: "이재명" },
  //   { src: Candidate2, alt: "윤석열" },
  //   { src: Candidate3, alt: "심상정" },
  //   // { src: Candidate4, alt: "안철수" },
  // ];
  return (
    <Layout activeMenu="about">
      <div>
        <h2>빅데이터로 살펴본 대선후보 지지율은?</h2>
        <h4>설명</h4>
        <p>
          네이버 기사 댓글들을 스크래핑하여 각 후보별 지지율을 알아보고자
          하였습니다. 각 후보별 커뮤니티에서 지지자에 대한 텍스트를 만들었고
        </p>
        <hr />
        <h4>배경</h4>
        <p>여러분들은 여론조사 전화를 받아보신 적이 있으신가요? </p>
        <p>
          이 프로젝트를 진행하게 된 이유는 과연 대부분의 사람들이 길고 긴
          여론조사 전화를 끝까지 할까라는 의문에서 시작되었습니다. 여론조사는
          대부분 전화조사로 이루어진다고 하는데요. 요즘은 본인의 후보 지지를
          그런 조사기관에 보다는
          <b> 유튜브나 뉴스 기사 댓글</b>과 같은 곳에서 표출하고는 합니다.
        </p>
        <p>댓글로 살펴본 대선 후보들에 대한 민심은 어떨까요?</p>
        {/* {candidate.map((person, index) => (
          <img src={person.src} loading="lazy" alt={person.alt} key={index} />
        ))} */}
      </div>
    </Layout>
  );
}
export default About;
