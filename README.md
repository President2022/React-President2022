# 20대 대선 지지율 예측
[링크](https://president2022.netlify.app/) 에서 배포된 사이트 확인 가능
## 페이지 구성

```
홈
├── 지지율 추이
├── 후보별 키워드
├── 프로젝트 설명
└── 예측 알고리즘
```

## 성능 최적화 및 활용 기술 소개
- 대용량 json 데이터를 불러오는 동안 로딩 화면을 보여주어 초기 렌더링 지연시간을 줄임
```jsx
// React는 lazy를 통해 컴포넌트를 동적으로 import
const WordClouds = React.lazy(() => import("../components/keyword/WordClouds"));

function Keyword() {
  return (
    // React.Suspense : 렌더링이 준비되지 않은 컴포넌트가 있을때 로딩 화면을 보여주고 로딩이 완료되면 해당 컴포넌트를 보여줌
    <Suspense fallback={<Loading />}>
      <WordClouds ... />
    </Suspense>
  )
}
```

- 워드클라우드 렌더링 결과를 메모이징(Memoizing)함으로써, 불필요한 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화
```jsx
function WordClouds({ data }) {
  return (
    <WordCloud
      data={data}
      ...
    />
  );
}
export default memo(WordClouds); // React.memo() 활용
```

- 텍스트 타이핑 라이브러리를 활용  
<img src='https://user-images.githubusercontent.com/30275955/191653636-9aa5eff7-c0fb-4bb2-b8a8-2aa9c161d7e7.gif' width='500'/>

- Chart.js를 활용하여 꺾은선 그래프 시각화
<img width="500" alt="image" src="https://user-images.githubusercontent.com/30275955/191654746-f7bd0bef-d2cf-44dd-ad23-9a7e9ee99a0f.png">

- d3-cloud 라이브러리로 워드클라우드 시각화
<img width="1193" alt="image" src="https://user-images.githubusercontent.com/30275955/191655033-27eb122e-f120-47f0-89d4-b4d35240fc49.png">

- 반응형 이미지로 화면에 맞는 적절한 이미지 제공
```html
<picture>
  <!-- 폭이 좁을 경우 모바일 최적화된 이미지로 변경 -->
  <source
    srcSet={VerticalImage}
    width={"100%"}
    media="(max-width: 505px)"
  />
  
  <!-- Lazy Loading으로 이미지 로딩 시점을 뒤로 미룸 -->
  <img src={HorizontalImage} loading="lazy" alt="프로젝트 설명 이미지" />
</picture>
```
