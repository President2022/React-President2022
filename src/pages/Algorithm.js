import Layout from "../components/shared/Layout";
import "./Algorithm.module.css";

function Algorithm() {
  return (
    <Layout activeMenu="algorithm">
      <h2>후보별 지지율을 예측한 방법</h2>
      <p>
        수집한 텍스트로 지지자 데이터셋을 구성하고 예측하기 까지 활용한 개념 및
        알고리즘에 대한 소개글입니다.
      </p>
      <br />
      <h3 style={{ color: "#555" }}>DTM(Document Term Matrix)란? </h3>
      <p>
        예측 알고리즘 설명에 앞서 텍스트를 머신러닝에 활용하기 위해 전처리
        작업이 필요합니다. 각 문서별로 어떤 키워드들이 들어있고, 각 키워드의
        빈도를 행렬의 형태로 나타낸 것이{" "}
        <mark style={{ backgroundColor: "#eeccff" }}>문서 단위 행렬</mark>, 즉
        DTM이라고 합니다.
      </p>
      <div style={{ width: "100%", height: "150px", overflowX: "auto" }}>
        <table border="1">
          <thead>
            <tr>
              <th style={{ minWidth: "200px" }}>문서별 키워드</th>
              <th style={{ minWidth: "60px" }}>김건희와</th>
              <th style={{ minWidth: "60px" }}>누구</th>
              <th style={{ minWidth: "60px" }}>대통령</th>
              <th style={{ minWidth: "60px" }}>뽑고</th>
              <th style={{ minWidth: "60px" }}>싶다</th>
              <th style={{ minWidth: "60px" }}>아내</th>
              <th style={{ minWidth: "60px" }}>윤석열</th>
              <th style={{ minWidth: "60px" }}>이재명</th>
              <th style={{ minWidth: "60px" }}>투표할까</th>
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
              <td>대통령 누구 투표할까</td>
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
      </div>
      <p>
        그렇다면 DTM 내에 있는 각 단어에 대한 중요도를 계산할 수 있는 TF-IDF
        가중치를 사용하여 기존의 DTM을 사용하는 것보다 많은 정보를 고려하여
        문서들을 비교해보겠습니다.
      </p>
      <br />
      <h3 style={{ color: "#555" }}>
        TF-IDF(Term Frequency-Inverse Document Frequency)란?
      </h3>
      <p>
        TF-IDF에서의 TF(Term Frequency)는{" "}
        <mark style={{ backgroundColor: "#eeccff" }}>단어 빈도</mark>,
        IDF(Inverse Document Frequency)는{" "}
        <mark style={{ backgroundColor: "#eeccff" }}>역 문서 빈도</mark>를
        가리키는 말입니다. 앞서 만든 DTM에서 TF-IDF의 가중치를 적용하는 과정이
        들어가는데요. 사실 TF는 이미 위의 DTM 예시에서 구하였습니다. DTM이 각
        문서에서의 각 단어의 등장 빈도를 나타내는 값이기 때문입니다.
      </p>
      <p>
        그렇다면 역 문서 빈도라는 뜻을 의미하는 IDF가 무엇인지 설명하기에 앞서,
        우리가 일상생활에서 많이 쓰는 단어는 무엇일까요? '아 정말? 음.. 그렇군'
        이런 유의미하지 않은 단어들이 가장 많을텐데요. IDF는 모든 문서에서 자주
        등장하는 단어는 중요도가 낮고, 특정 문서에서만 자주 등장하는 단어는
        중요도가 높다고 판단할 것이라는 개념이 적용이 됩니다. 그래서 아래와 같은
        수식으로 IDF를 구합니다.
      </p>
      <div>
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
          <mfrac lineThickNess="200%">
            <mi>n</mi>
            <mo>/</mo>
            <mo stretchy="false">(</mo>
            <mrow>
              <mn>1</mn>
              <mo>+</mo>
              <mi>d</mi>
              <mi>f</mi>
              <mo stretchy="false">(</mo>
              <mi>t</mi>
              <mo stretchy="false">)</mo>
            </mrow>
            <mo stretchy="false">)</mo>
          </mfrac>
          <mo stretchy="false">)</mo>
        </math>
      </div>
      <p>
        여기서 d는 문서, t는 단어, n은 문서의 총 개수이며, df(t)는 특정 단어 t가
        등장한 문서의 수입니다. 수식에 대한 자세한 설명은 생략하겠습니다.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
              <td>투표할까</td>
              <td>ln(4/(1+1)) = 0.693147</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        TF와 IDF를 모두 구했으니 이제 TF-IDF를 계산할 수 있습니다. 각 단어의
        TF는 DTM에서의 각 단어의 값과 같으므로, 앞서 사용한 DTM에서 단어 별로
        위의 IDF값을 곱해주면 TF-IDF 값을 얻을 수 있습니다.
      </p>
      <div style={{ width: "100%", height: "150px", overflowX: "auto" }}>
        <table border="1">
          <thead>
            <tr>
              <th style={{ minWidth: "200px" }}>문서별 키워드</th>
              <th>김건희와</th>
              <th>누구</th>
              <th>대통령</th>
              <th>뽑고</th>
              <th>싶다</th>
              <th>아내</th>
              <th>윤석열</th>
              <th>이재명</th>
              <th>투표할까</th>
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
              <td>대통령 누구 투표할까</td>
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
      </div>
      <p>
        위와 같은 방법으로 디시인사이드에서 각 후보별 지지자 텍스트 데이터로
        TF-IDF 행렬을 만들고 머신러닝 모델을 학습시킬 준비를 마쳤습니다.
      </p>
      <br />
      <h3 style={{ color: "#555" }}>Naive Bayes란?</h3>
      <p>
        본격적으로 전처리한 데이터로 머신러닝을 시도하였습니다. 다양한 학습 방법
        중 Naïve-Bayes를 사용하였는데 이는 스팸 메일 정리, 텍스트 분류, 감정
        분석 등에 광범위하게 사용되는 지도학습 기법으로, 베이즈 추정(혹은
        정리)에서 파생된 개념입니다. 여기서{" "}
        <mark style={{ backgroundColor: "#eeccff" }}>베이즈 추정</mark>시의
        조건부 확률은 B 사건이 일어나는 경우에 A 사건이 일어날 확률(=P(A|B))로,
        본 프로젝트에서는 '(B 사건) 특정 키워드가 등장하는 경우, ’(A 사건) 특정
        후보를 지지할 확률' 정도로 생각해볼 수 있습니다.
      </p>
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mi>P</mi>
        <mo stretchy="false">(</mo>
        <mi>A</mi>
        <mo data-mjx-texclass="ORD" stretchy="false">
          |
        </mo>
        <mi>B</mi>
        <mo stretchy="false">)</mo>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mi>P</mi>
            <mo stretchy="false">(</mo>
            <mi>B</mi>
            <mo data-mjx-texclass="ORD" stretchy="false">
              |
            </mo>
            <mi>A</mi>
            <mo stretchy="false">)</mo>
            <mi>P</mi>
            <mo stretchy="false">(</mo>
            <mi>A</mi>
            <mo stretchy="false">)</mo>
          </mrow>
          <mo stretchy="false">/</mo>
          <mrow>
            <mi>P</mi>
            <mo stretchy="false">(</mo>
            <mi>B</mi>
            <mo stretchy="false">)</mo>
          </mrow>
        </mfrac>
      </math>
      <p>
        Naive Bayes 학습방법은 상기 베이즈 공식을 계산하기 위해 사전/후 확률을
        계산하는 과정입니다. 앞선 DTM을 그대로 Naive Bayes 분류기에 사용할 수도
        있겠지만, DTM 행렬 대신 TF-IDF 가중치를 적용한 TF-IDF 행렬을 입력으로
        텍스트 분류를 수행하면, 성능의 개선을 얻을 수도 있습니다.
        <i style={{ color: "#555" }}>
          TF-IDF 행렬이 항상 DTM으로 수행했을 때보다 성능이 뛰어나지는 않습니다.
        </i>
      </p>
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table border="1">
          <thead>
            <tr>
              <th>train/test</th>
              <th style={{ minWidth: "200px" }}>문서</th>
              <th style={{ minWidth: "150px" }}>DTM 또는 TF-IDF</th>
              <th>지지후보</th>
              <th style={{ minWidth: "150px" }}>Naive Bayes 결과(예시)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="4">train</td>
              <td>이재명 뽑고 싶다</td>
              <td>...</td>
              <td>이재명</td>
              <td>0.9</td>
            </tr>
            <tr>
              <td>윤석열 뽑고 싶다</td>
              <td>...</td>
              <td>윤석열</td>
              <td>0.8</td>
            </tr>
            <tr>
              <td>윤석열 아내 김건희와 윤석열</td>
              <td>...</td>
              <td>이재명</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>대통령 누구 투표할까</td>
              <td>...</td>
              <td>윤석열</td>
              <td>0.6</td>
            </tr>
            <tr>
              <td rowspan="2">test</td>
              <td>이재명 투표할까</td>
              <td>...</td>
              <td>?</td>
              <td>이재명 지지확률 0.7</td>
            </tr>
            <tr>
              <td>윤석열 투표할까</td>
              <td>...</td>
              <td>?</td>
              <td>윤석열 지지확률 0.7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        위와 같은 과정으로 test set을 머신러닝한 결과 두개의 문서 중 각각 1개씩
        각 후보를 지지한다고 판단되었을 때 두 후보의 지지율이 각각 50% 대 50%로
        계산하여 그래프로 나타내었습니다.
      </p>
      <br />
      <p>
        참고자료 |{" "}
        <a
          href="https://wikidocs.net/book/2155"
          style={{ textDecoration: "none", color: "#2222ee" }}
        >
          딥 러닝을 이용한 자연어 처리 입문
        </a>
      </p>
    </Layout>
  );
}
export default Algorithm;
