import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { fetchMockData } from "../services/api";
import { AirQualityData } from "../types";
import Loader from "./Loader";
import { ThemeContextUse } from "../context/ThemeProvider";

const AirQuality = () => {
	const { isDarkMode } = ThemeContextUse();
	const [data, setData] = useState<AirQualityData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchMockData("/dashboard")
			.then((response) => {
				setData(response.airQuality);
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<div
			className={`${
				isDarkMode ? "bg-gray-800" : "bg-gray-200"
			} rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out`}>
			<div className='flex items-center justify-between mb-4'>
				<h3
					className={`font-medium text-[80%] md:text-base ${
						isDarkMode ? "text-gray-200" : "text-gray-800"
					}`}>
					Air Quality Index
				</h3>
				<span
					className={`px-2 py-1 ${
						isDarkMode
							? "bg-green-500/20 text-green-500"
							: "bg-green-500/30 text-green-700"
					} rounded-full text-[70%] md:text-xs`}>
					Good
				</span>
			</div>
			{loading ? (
				<Loader />
			) : (
				<div className='h-48'>
					<ResponsiveContainer width='100%' height='100%'>
						<BarChart data={data}>
							<XAxis
								dataKey='day'
								stroke={isDarkMode ? "#4b5563" : "#6b7280"}
								fontSize={12}
								tickLine={false}
								axisLine={false}
								tick={{ fill: isDarkMode ? "#9ca3af" : "#4b5563" }}
							/>
							<YAxis
								stroke={isDarkMode ? "#4b5563" : "#6b7280"}
								fontSize={12}
								tickLine={false}
								axisLine={false}
								tick={{ fill: isDarkMode ? "#9ca3af" : "#4b5563" }}
							/>
							<Bar dataKey='value' fill='#22c55e' radius={[4, 4, 0, 0]} />
						</BarChart>
					</ResponsiveContainer>
				</div>
			)}
		</div>
	);
};

export default AirQuality;
