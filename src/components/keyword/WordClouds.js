import React from "react";
import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

export default function WordClouds({ data }) {
  return (
    <WordCloud
      data={data}
      width={500}
      height={500}
      font="IBMPlexSansKR-Regular"
      fontWeight="bold"
      fontSize={(word) => Math.log2(word.value) * 5}
      spiral="rectangular"
      rotate={0}
      padding={2}
      random={Math.random}
      fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
    />
  );
}
