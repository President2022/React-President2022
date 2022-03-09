import Layout from "../components/shared/Layout";
import "./Algorithm.module.css";

function Algorithm() {
  return (
    <Layout activeMenu="algorithm">
      <h2>DTM(Document Term Matrix)란? </h2>
      <p>
        예측 알고리즘 설명에 앞서 텍스트를 머신러닝에 활용하기 위해 전처리
        작업이 필요합니다. 각 문서별로 어떤 키워드들이 들어있고, 각 키워드의
        빈도를 행렬의 형태로 나타낸 것이 문서 단위 행렬, 즉 DTM이라고 합니다.
      </p>
      <table border="1">
        <thead>
          <tr>
            <th style={{ width: "300px" }}>문서별 키워드</th>
            <th>김건희와</th>
            <th>누구</th>
            <th>대통령</th>
            <th>뽑고</th>
            <th>싶다</th>
            <th>아내</th>
            <th>윤석열</th>
            <th>이재명</th>
            <th>투표하지</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>이재명 뽑고 싶다</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>윤석열 뽑고 싶다</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>윤석열 아내 김건희와 윤석열</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>대통령 누구 투표하지</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <p>
        그렇다면 DTM 내에 있는 각 단어에 대한 중요도를 계산할 수 있는 TF-IDF
        가중치를 사용하여 기존의 DTM을 사용하는 것보다 많은 정보를 고려하여
        문서들을 비교해보겠습니다.
      </p>
      <h2>TF-IDF(Term Frequency-Inverse Document Frequency)란?</h2>
      <p>
        TF-IDF에서의 TF(Term Frequency)는 단어 빈도, IDF(Inverse Document
        Frequency)는 역 문서 빈도를 가리키는 말입니다. 앞서 만든 DTM에서
        TF-IDF의 가중치를 적용하는 과정이 들어가는데요. 사실 TF는 이미 위의 DTM
        예시에서 구하였습니다. DTM이 각 문서에서의 각 단어의 등장 빈도를
        나타내는 값이기 때문입니다.
      </p>
      <p>
        그렇다면 역 문서 빈도라는 뜻을 의미하는 IDF가 무엇인지 설명하기에 앞서,
        우리가 일상생활에서 많이 쓰는 단어는 무엇일까요? '아 정말? 음.. 그렇군'
        이런 유의미하지 않은 단어들이 가장 많을텐데요. IDF는 모든 문서에서 자주
        등장하는 단어는 중요도가 낮고, 특정 문서에서만 자주 등장하는 단어는
        중요도가 높다고 판단할 것이라는 개념이 적용이 됩니다. 그래서 아래와 같은
        수식으로 IDF를 구합니다.
      </p>
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mi>i</mi>
        <mi>d</mi>
        <mi>f</mi>
        <mo stretchy="false">(</mo>
        <mi>d</mi>
        <mo>,</mo>
        <mi>t</mi>
        <mo stretchy="false">)</mo>
        <mo>=</mo>
        <mi>l</mi>
        <mi>o</mi>
        <mi>g</mi>
        <mo stretchy="false">(</mo>
        <mfrac>
          <mi>n</mi>
          <mrow>
            <mn>1</mn>
            <mo>+</mo>
            <mi>d</mi>
            <mi>f</mi>
            <mo stretchy="false">(</mo>
            <mi>t</mi>
            <mo stretchy="false">)</mo>
          </mrow>
        </mfrac>
        <mo stretchy="false">)</mo>
      </math>
      <p>
        여기서 d는 문서, t는 단어, n은 문서의 총 개수이며, df(t)는 특정 단어 t가
        등장한 문서의 수입니다. 수식에 대한 자세한 설명은 생략하겠습니다.
      </p>
      <table border="1">
        <thead>
          <tr>
            <th>단어</th>
            <th style={{ width: "200px" }}>IDF(역문서빈도)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김건희와</td>
            <td>ln(4/(1+1)) = 0.693147</td>
          </tr>
          <tr>
            <td>누구</td>
            <td>ln(4/(1+1)) = 0.693147</td>
          </tr>
          <tr>
            <td>대통령</td>
            <td>ln(4/(1+1)) = 0.693147</td>
          </tr>
          <tr>
            <td>뽑고</td>
            <td>ln(4/(1+1)) = 0.693147</td>
          </tr>
          <tr>
            <td>싶다</td>
            <td>ln(4/(1+1)) = 0.693147</td>
          </tr>
          <tr>
            <td>아내</td>
            <td>ln(4/(1+1)) = 0.693147</td>
          </tr>
          <tr>
            <td>윤석열</td>
            <td>ln(4/(2+1)) = 0.287682</td>
          </tr>
          <tr>
            <td>이재명</td>
            <td>ln(4/(1+1)) = 0.693147</td>
          </tr>
          <tr>
            <td>투표하지</td>
            <td>ln(4/(1+1)) = 0.693147</td>
          </tr>
        </tbody>
      </table>
      <p>
        TF와 IDF를 모두 구했으니 이제 TF-IDF를 계산할 수 있습니다. 각 단어의
        TF는 DTM에서의 각 단어의 값과 같으므로, 앞서 사용한 DTM에서 단어 별로
        위의 IDF값을 곱해주면 TF-IDF 값을 얻을 수 있습니다.
      </p>
      <table border="1">
        <thead>
          <tr>
            <th style={{ width: "300px" }}>문서별 키워드</th>
            <th>김건희와</th>
            <th>누구</th>
            <th>대통령</th>
            <th>뽑고</th>
            <th>싶다</th>
            <th>아내</th>
            <th>윤석열</th>
            <th>이재명</th>
            <th>투표하지</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>이재명 뽑고 싶다</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0.693147</td>
            <td>0.693147</td>
            <td>0</td>
            <td>0</td>
            <td>0.693147</td>
            <td>0</td>
          </tr>
          <tr>
            <td>윤석열 뽑고 싶다</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0.693147</td>
            <td>0.693147</td>
            <td>0</td>
            <td>0.287682</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>윤석열 아내 김건희와 윤석열</td>
            <td>0.693147</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0.693147</td>
            <td>0.575364</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>대통령 누구 투표하지</td>
            <td>0</td>
            <td>0.693147</td>
            <td>0.693147</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0.693147</td>
          </tr>
        </tbody>
      </table>
      <p>
        위와 같은 방법으로 디시인사이드에서 각 후보별 지지자 텍스트 데이터로
        TF-IDF 행렬을 만들고 머신러닝 모델을 학습시킬 준비를 하였습니다.
      </p>
      <h2>Naive Bayes란?</h2>
    </Layout>
  );
}
export default Algorithm;
