import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { fetchMockData } from "../services/api";
import { EnergySavingsData } from "../types";
import Loader from "./Loader";

export default function EnergySavings() {
	const [data, setData] = useState<EnergySavingsData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchMockData("/dashboard")
			.then((response) => {
				setData(response.energySavings);
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className='bg-gray-800 rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out'>
			<div className='flex items-center justify-between mb-4'>
				<h3 className='font-medium text-[80%] md:text-base'>Energy Savings</h3>
				<span className='text-[70%] md:text-xs text-gray-400'>
					Weekly Overview
				</span>
			</div>
			{loading ? <Loader />:(
				<div className='h-48'>
				<ResponsiveContainer width='100%' height='100%'>
					<AreaChart data={data}>
						<defs>
							<linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#8b5cf6' stopOpacity={0.3} />
								<stop offset='95%' stopColor='#8b5cf6' stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis
							dataKey='name'
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
							tickFormatter={(value) => `${value}%`}
						/>
						<Area
							type='monotone'
							dataKey='value'
							stroke='#8b5cf6'
							fillOpacity={1}
							fill='url(#colorValue)'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			)}
		</div>
	);
}
