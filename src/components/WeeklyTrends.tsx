import { useEffect, useState } from "react";
import { MdTrendingUp } from "react-icons/md";
import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { fetchMockData } from "../services/api";
import { WeeklyTrendsData } from "../types";
import Loader from "./Loader";

export default function WeeklyTrends() {
	const [data, setData] = useState<WeeklyTrendsData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchMockData("/dashboard")
			.then((response) => {
				setData(response.weeklyTrends);
			})
			.finally(() => setLoading(false));
	}, []);

	const latestEmissions = data.length > 0 ? data[data.length - 1].emissions : 0;
	const emissionsChange =
		data.length > 0
			? Number(
					(
						((latestEmissions - data[0].emissions) / data[0].emissions) *
						100
					).toFixed(1)
			  )
			: 0;

	return (
		<div className='bg-gray-800 rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out'>
			<div className='flex items-center justify-between mb-4'>
				<div className='flex items-center gap-2'>
					<h3 className='font-medium text-[80%] md:text-base'>
						Weekly Sustainability Trends
					</h3>
					<MdTrendingUp
						className={emissionsChange < 0 ? "text-green-500" : "text-red-500"}
					/>
				</div>
				<span className='text-[70%] md:text-sm font-semibold'>
					{emissionsChange < 0 ? "↓" : "↑"} {Math.abs(Number(emissionsChange))}%
				</span>
			</div>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='h-48'>
						<ResponsiveContainer width='100%' height='100%'>
							<LineChart data={data}>
								<XAxis
									dataKey='day'
									stroke='#4b5563'
									fontSize={12}
									tickLine={false}
									axisLine={false}
								/>
								<YAxis
									stroke='#4b5563'
									fontSize={12}
									tickLine={false}
									axisLine={false}
								/>
								<Tooltip
									contentStyle={{
										background: "#1f2937",
										border: "none",
										borderRadius: "0.5rem",
									}}
									itemStyle={{ color: "#e5e7eb" }}
								/>
								<Line
									type='monotone'
									dataKey='emissions'
									stroke='#ef4444'
									strokeWidth={2}
									dot={false}
									name='CO2 Emissions (kg)'
								/>
								<Line
									type='monotone'
									dataKey='energy'
									stroke='#22c55e'
									strokeWidth={2}
									dot={false}
									name='Energy Usage (kWh)'
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
					<div className='mt-4 text-[70%] md:text-sm text-gray-400'>
						Showing CO2 emissions and energy usage trends for the past week
					</div>
				</>
			)}
		</div>
	);
}
