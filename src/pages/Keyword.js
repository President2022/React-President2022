import React, { Suspense } from "react";
import Layout from "../components/shared/Layout";
import Loading from "../components/keyword/Loading";
import Button from "../components/keyword/Button";
import acs from "../asset/ACS_keyword_result_v0.2.json";
import ljm from "../asset/LJM_keyword_result_v0.2.json";
import ysy from "../asset/YSY_keyword_result_v0.2.json";

const acsData = [];
const ljmData = [];
const ysyData = [];
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

function Keyword() {
  return (
    <Layout activeMenu="keyword">
      <h2>후보별 지지자들의 민심은?</h2>
      <Button name={"전체"} />
      <Button name={"윤석열"} />
      <Button name={"이재명"} />
      <Button name={"안철수"} />
      <Suspense fallback={<Loading />}>
        <WordClouds data={acsData} />
        <WordClouds data={ljmData} />
        <WordClouds data={ysyData} />
      </Suspense>
    </Layout>
  );
}
export default Keyword;
