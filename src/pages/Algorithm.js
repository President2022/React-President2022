import Layout from "../components/shared/Layout";
import styles from "./Algorithm.module.css";
function Algorithm() {
  return (
    <Layout activeMenu="algorithm">
      <h2>DTM(Document Term Matrix)란? </h2>
      <p>
        예측 알고리즘 설명에 앞서 텍스트를 머신러닝에 활용하기 위해 전처리
        작업이 필요한데요. 각 문서별로 어떤 키워드들이 들어있고, 각 키워드의
        빈도를 행렬의 형태로 나타낸 것이 문서 단위 행렬, 즉 DTM이라고 합니다.
      </p>
      <table border="1">
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>3</th>
            <td>4</td>
          </tr>
          <tr>
            <th>5</th>
            <td>6</td>
          </tr>
          <tr>
            <th>7</th>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
export default Algorithm;
