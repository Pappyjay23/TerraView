import { MdTrendingUp } from "react-icons/md";
import {
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

const data = [
	{ day: "Mon", emissions: 120, energy: 150 },
	{ day: "Tue", emissions: 110, energy: 145 },
	{ day: "Wed", emissions: 105, energy: 140 },
	{ day: "Thu", emissions: 115, energy: 155 },
	{ day: "Fri", emissions: 108, energy: 148 },
	{ day: "Sat", emissions: 100, energy: 135 },
	{ day: "Sun", emissions: 95, energy: 130 },
];

export default function WeeklyTrends() {
	const latestEmissions = data[data.length - 1].emissions;
	const emissionsChange = Number(
		(((latestEmissions - data[0].emissions) / data[0].emissions) * 100).toFixed(
			1
		)
	);

	return (
		<div className='bg-gray-800 rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out'>
			<div className='flex items-center justify-between mb-4'>
				<div className='flex items-center gap-2'>
					<h3 className='font-medium text-[80%] md:text-base'>Weekly Sustainability Trends</h3>
					<MdTrendingUp
						className={emissionsChange < 0 ? "text-green-500" : "text-red-500"}
					/>
				</div>
				<span className='text-[70%] md:text-sm font-semibold'>
					{emissionsChange < 0 ? "↓" : "↑"} {Math.abs(Number(emissionsChange))}%
				</span>
			</div>
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
		</div>
	);
}
