import Layout from "../components/shared/Layout";
import React, { useEffect } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

const width = 500;
const height = 400;

function WordCloud() {
  useEffect(() => {
    const data = [
      "Hello",
      "world",
      "normally",
      "you",
      "want",
      "more",
      "words",
      "than",
      "this",
    ];

    cloud()
      .size([width, height])
      .words(
        data.map(function (d) {
          return { text: d, size: 10 + Math.random() * 90, test: "haha" };
        })
      )
      .padding(5)
      .font("Impact")
      .fontSize(function (d) {
        return d.size;
      })
      .on("end", end)
      .start();

    function end(words) {
      d3.select("#word-cloud")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        // .style("border", "1px solid black")
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", function (d) {
          return d.size + "px";
        })
        .style("font-family", "Impact")
        .style("fill", function (d) {
          return `hsl(${Math.random() * 360},100%,50%`;
        })
        .attr("text-anchor", "middle")
        .attr("transform", function (d) {
          console.log(d);
          // const rotate = d.text.length > 4 ? 0 : 90;
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function (d) {
          return d.text;
        });
    }
  });

  return <div id="word-cloud"></div>;
}

function Keyword() {
  return (
    <Layout activeMenu="keyword">
      <h2>Keyword</h2>
      <WordCloud />
    </Layout>
  );
}
export default Keyword;
