// // import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
// import { Line } from "react-chartjs-2";
// import SectionContainer from "../../layouts/SectionContainer";
// import CustomTooltip from "../CustomToolTip";
// import { CartesianGrid, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// // ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
// // ChartJS.defaults.font.family = "SF Pro Display";
// // ChartJS.defaults.font.size = 12;
// // ChartJS.defaults.font.weight = 400;

// const rawData = [
// 	{ name: "Page A", amount: 4000, time: new Date("2024-08-06T09:00:00") },
// 	{ name: "Page B", amount: 3500, time: new Date("2024-08-06T11:00:00") },
// 	{ name: "Page C", amount: 5200, time: new Date("2024-08-06T13:00:00") },
// 	{ name: "Page D", amount: 4800, time: new Date("2024-08-06T15:00:00") },
// 	{ name: "Page E", amount: 6000, time: new Date("2024-08-06T17:00:00") },
// 	{ name: "Page F", amount: 5500, time: new Date("2024-08-06T19:00:00") },
// ];

// const labels = ["2024-08-06T09:00:00", "2024-08-06T11:00:00", "2024-08-06T13:00:00", "2024-08-06T15:00:00", "2024-08-06T17:00:00", "2024-08-06T19:00:00"];

// const amounts = [3000, 2500, 200, 4800, 6000, 5500];

// const timeFormatter = (value: string) => {
// 	return `${new Date(value).getHours()}:00`;
// };

// const numberFormatter = (value: string) => {
// 	const numValue = parseFloat(value);

// 	if (isNaN(numValue)) {
// 		return value;
// 	}

// 	if (numValue >= 1000) {
// 		return Math.round(numValue / 1000) + "K";
// 	}
// 	return numValue.toString();
// };

// const data = {
// 	labels: labels,
// 	datasets: [
// 		{
// 			label: "My First dataset",
// 			data: amounts,
// 			fill: false,
// 			borderColor: "#1473E6",
// 			tension: 0.4,
// 		},
// 	],
// };

// const options = {
// 	responsive: true,
// 	cubicInterpolationMode: "monotone",
// 	hover: {
// 		intersect: false,
// 	},
// 	elements: {
// 		point: {
// 			backgroundColor: "#1473E6",
// 			pointRadius: 1,
// 			pointHoverRadius: 13,
// 		},
// 	},
// 	scales: {
// 		x: {
// 			grid: {
// 				display: false,
// 			},
// 			border: {
// 				display: false,
// 			},
// 			ticks: {
// 				padding: 10,
// 				color: "#9F9F9F",
// 				callback: timeFormatter,
// 			},
// 		},
// 		y: {
// 			border: {
// 				display: false,
// 				dash: [5, 10, 7, 10, 9, 10],
// 			},
// 			ticks: {
// 				padding: 10,
// 				color: "#9F9F9F",
// 				callback: numberFormatter,
// 			},
// 		},
// 	},
// 	plugins: {
// 		legend: {
// 			display: false,
// 		},
// 		title: {
// 			display: false,
// 		},
// 		tooltip: {
// 			enabled: false,
// 			external: (context) => <CustomTooltip context={context} />,
// 		},
// 	},
// };

// const Analytics = () => {
// 	return (
// 		<SectionContainer title="Settings">
// 			<div className="mb-16 flex justify-between border-b border-[#F5F5F5] pb-10 font-roboto text-xl font-semibold text-[#141414CC]">
// 				<span>200 Reads</span>
// 				<span>200 Reads</span>
// 				<span>200 Reads</span>
// 			</div>
// 			{/* <Line
// 				data={data}
// 				options={options}
// 			/> */}
// 			<ResponsiveContainer
// 				width="100%"
// 				height={300}
// 			>
// 				<LineChart data={rawData}>
// 					<Line
// 						type="monotone"
// 						dot={false}
// 						dataKey="amount"
// 						stroke="#1473E6"
// 						activeDot={{ stroke: "#1473E6", strokeWidth: 5, r: 10 }} // Render a component and make it follow the tooltip
// 						strokeWidth={4}
// 						animationEasing="linear"
// 					/>
// 					<CartesianGrid
// 						vertical={false}
// 						horizontal={true}
// 						stroke="#9F9F9F"
// 						strokeDasharray="5, 10, 7, 10, 9, 10"
// 					/>
// 					<YAxis
// 						type="number"
// 						dataKey="amount"
// 						tick={{
// 							fontFamily: "SF Pro Display",
// 							fontSize: 12,
// 							fontWeight: 400,
// 							dx: -18,
// 						}}
// 						tickLine={false}
// 						axisLine={false}
// 					/>
// 					<XAxis
// 						dataKey="time"
// 						tickFormatter={(timeStr) => `${new Date(timeStr).getHours()}:00`}
// 						tick={{
// 							fontFamily: "SF Pro Display",
// 							fontSize: 12,
// 							fontWeight: 400,
// 							dy: 18,
// 						}}
// 						axisLine={false}
// 						tickLine={false}
// 					/>
// 					<Tooltip
// 						cursor={false}
// 						content={<CustomTooltip />}
// 						labelFormatter={(value) => `${new Date(value).getHours()}:00`}
// 						formatter={(value) => [`${value} views`, "Amount"]}
// 					/>
// 				</LineChart>
// 			</ResponsiveContainer>
// 		</SectionContainer>
// 	);
// };

// export default Analytics;
