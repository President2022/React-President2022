import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import graphData from '../asset/data/100key.json';
import Layout from '../components/shared/Layout';
import styles from './Graph.module.css';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
// console.log(graphData);
const dateArray = [];
const ljmArray = [];
const ysyArray = [];
for (let item in graphData.총) {
	dateArray.push(graphData['Unnamed: 0'][item]);
	ljmArray.push(graphData['LJM.1'][item]);
	ysyArray.push(graphData['YSY.1'][item]);
}

const data = {
	labels: dateArray,
	datasets: [
		{
			type: 'line',
			label: '이재명',
			data: ljmArray,
			backgroundColor: 'blue',
			borderColor: 'blue',
		},
		{
			type: 'line',
			label: '윤석열',
			data: ysyArray,
			backgroundColor: 'red',
			borderColor: 'red',
			// borderWidth: 2,
		},
		// {
		//   type: "line",
		//   label: "안철수",
		//   data: acsArray,
		//   backgroundColor: "orange",
		//   borderColor: "orange",
		// },
	],
};

const options = {
	spanGaps: true,
	// line 타입의 경우 중간에 누락된 데이터가 있을 경우 이어그릴지 여부를 정합니다!
	// maxBarThickness: 10,
	// bar 타입의 경우 막대의 최대 굵기를 정합니다!
	grouped: true,
	// x축 값이 같은 애들끼리 그룹화할지를 정하는데요,
	// true 설정 시 해당 x축 값내에서 서로 공간을 나누면서 나란히 보여지게 되고,
	// false 설정 시 각 포인트가 해당 x축 정중앙에 그려지게 되어서 x축 값이 같은 애들끼리 서로 겹쳐지게 됩니다.
	interaction: {
		mode: 'index',
	},
	// 호버 동작과 관련된 설정인데요, 호버를 하게 되면 툴팁이 뜨게 되는데
	// 그 툴팁이 뜨는 기준을 설정할 수 있습니다.
	// 위와 같이 index를 기준으로 설정하게 되면 동일한 index에 놓인 값들이 모두 떠요!
	plugins: {
		legend: {
			// 범례 스타일링
			labels: {
				usePointStyle: true,
				// 범례 도형 모양과 관련된 속성으로, false일 경우엔 기본 직사각형 도형으로 표시됩니다.
				padding: 10,
				// 범례 간 가로 간격을 조정할 수 있습니다. 범례의 상하 padding을 지정하는 기능은 따로 지원되지 않아요. ㅠㅠ
				font: {
					// 범례의 폰트 스타일도 지정할 수 있습니다.
					family: 'IBMPlexSansKR-Regular',
					lineHeight: 1,
				},
			},
		},
		tooltip: {
			// 툴팁 스타일링
			backgroundColor: 'rgba(100, 100, 100, 0.75)',
			// 툴팁 색상을 지정할 수 있습니다.
			padding: 10,
			// 툴팁 패딩을 지정할 수 있습니다.
			bodySpacing: 5,
			// 툴팁 내부의 항목들 간 간격을 조정할 수 있습니다.
			bodyFont: {
				font: {
					// 툴팁 내용의 폰트 스타일을 지정할 수 있습니다.
					family: 'IBMPlexSansKR-Regular',
				},
			},
			usePointStyle: true,
			callbacks: {
				label: (context) => {
					// 툴팁에서 후보별 지지율을 소수점 둘째자리까지 보여준다.
					let title = context.dataset.label;
					let data = Math.round(context.parsed.y * 100) / 100 + '%';
					return `${title} : ${data}`;
				},
			},
		},
	},
	scales: {
		//   // x축과 y축에 대한 설정을 할 수 있습니다.
		x: {
			grid: {
				// x축을 기준으로 그려지는 선(세로선)에 대한 설정입니다.
				display: false, // 선이 아예 안 그려지게 됩니다.
				drawTicks: true, // 눈금 표시 여부를 지정합니다.
				color: '#E2E2E230', // 눈금 및 선의 색상을 지정합니다.
			},
		},
		y: {
			grid: {
				// 가로선 설정
				// color: '#E2E2E230',
			},
			axis: 'y', // 이 축이 y축임을 명시해줍니다.
			display: true, // 축의 가시성 여부도 설정할 수 있습니다.
			position: 'left', // 축이 왼쪽에 표시될지, 오른쪽에 표시될지 정할 수 있습니다.
			title: {
				display: true,
				align: 'end',
				color: '#808080',
				text: '(%)',
			},
		},
	},
};

const Chart = () => {
	return (
		<div className={styles.container}>
			<Line type='line' data={data} options={options} />
		</div>
	);
};

function Graph() {
	return (
		<Layout activeMenu='graph'>
			<h2>트위터와 커뮤니티 데이터로 살펴본 이재명 vs 윤석열</h2>
			<Chart />
			<p>2022년 3월 1일 ~ 3월 8일 기준 예측 지지율입니다.</p>
		</Layout>
	);
}
export default Graph;
