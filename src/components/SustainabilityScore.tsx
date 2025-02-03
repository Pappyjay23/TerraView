import { useEffect, useState } from "react";
import { MdCalendarToday } from "react-icons/md";
import { fetchMockData } from "../services/api";
import { SustainabilityScoreData } from "../types";
import Loader from "./Loader";

function getScoreColor(score: number) {
	if (score >= 90) return "bg-green-500";
	if (score >= 70) return "bg-yellow-500";
	return "bg-red-500";
}

export default function SustainabilityScore() {
	const [days, setDays] = useState<SustainabilityScoreData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchMockData("/dashboard")
			.then((response) => {
				setDays(response.sustainabilityScore);
			})
			.finally(() => setLoading(false));
	}, []);

	const averageScore =
		days.length > 0
			? days.reduce((sum, day) => sum + day.score, 0) / days.length
			: 0;

	return (
		<div className='bg-gray-800/50 rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out'>
			<div className='flex items-center justify-between mb-6'>
				<h3 className='font-medium text-[80%] md:text-base'>
					Sustainability Summary
				</h3>
				<MdCalendarToday className='text-gray-400' />
			</div>

			{loading ? (
				<Loader />
			) : (
				<>
					<div className='flex justify-between mb-6'>
						{days.map((day) => (
							<div key={day.day} className='text-center'>
								<div className='text-gray-400 mb-1 text-[80%] md:text-base'>
									{day.day}
								</div>
								<div className='text-base md:text-xl font-bold'>{day.date}</div>
								<div className='flex justify-center gap-0.5 mt-1'>
									<div
										className={`w-1 h-1 rounded-full ${getScoreColor(
											day.score
										)}`}
									/>
									<div
										className={`w-1 h-1 rounded-full ${getScoreColor(
											day.score
										)}`}
									/>
									<div
										className={`w-1 h-1 rounded-full ${getScoreColor(
											day.score
										)}`}
									/>
								</div>
							</div>
						))}
					</div>

					<div className='text-center'>
						<div className='text-3xl md:text-4xl font-bold mb-2'>
							{averageScore.toFixed(2)}
						</div>
						<div className='text-gray-400 text-[80%] md:text-sm'>
							Average sustainability score
						</div>
					</div>

					<div className='mt-4 text-[80%] md:text-sm text-gray-400'>
						Score breakdown: Energy efficiency, Waste reduction, Water
						conservation
					</div>
				</>
			)}
		</div>
	);
}
