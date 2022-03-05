import Layout from "../components/shared/Layout";
import React from "react";
import acs from "../asset/ACS.json";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const data = [];
for (let key in acs) {
  data.push({ text: key, value: acs[key] });
}
const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

function Keyword() {
  return (
    <Layout activeMenu="keyword">
      <h2>Keyword</h2>
      <WordCloud
        data={data}
        width={500}
        height={500}
        font="Times"
        fontStyle="italic"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 5}
        spiral="rectangular"
        rotate={0}
        padding={5}
        random={Math.random}
        fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
      />
    </Layout>
  );
}
export default Keyword;
