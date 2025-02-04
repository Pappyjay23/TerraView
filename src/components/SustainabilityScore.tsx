import { useEffect, useState } from "react";
import { MdCalendarToday, MdTrendingUp, MdTrendingDown } from "react-icons/md";
import { fetchMockData } from "../services/api";
import { SustainabilityScoreData } from "../types";
import Loader from "./Loader";
import { ThemeContextUse } from "../context/ThemeProvider";

function getScoreColor(score: number) {
	if (score >= 90) return "bg-green-500";
	if (score >= 70) return "bg-yellow-500";
	return "bg-red-500";
}

function getScoreTrend(scores: number[]) {
	if (scores.length < 2) return 0;
	const lastScore = scores[scores.length - 1];
	const prevScore = scores[scores.length - 2];
	return lastScore - prevScore;
}

function getScoreImpactDescription(score: number) {
	if (score >= 90) return "Excellent sustainability performance";
	if (score >= 70) return "Good sustainability efforts";
	return "Needs improvement in sustainability practices";
}

interface SustainablityScoreProps {
	startDate: string;
	endDate: string;
}

const SustainabilityScore = ({
	startDate,
	endDate,
}: SustainablityScoreProps) => {
	const [days, setDays] = useState<SustainabilityScoreData[]>([]);
	const [loading, setLoading] = useState(true);
	const { isDarkMode } = ThemeContextUse();

	useEffect(() => {
		// Convert date strings to numeric values for filtering
		const start = startDate.split("-")[2] || "14";
		const end = endDate.split("-")[2] || "18";

		fetchMockData("/dashboard", { startDate: start, endDate: end })
			.then((response) => {
				setDays(response.sustainabilityScore);
			})
			.finally(() => setLoading(false));
	}, [startDate, endDate]);

	const averageScore =
		days.length > 0
			? days.reduce((sum, day) => sum + day.score, 0) / days.length
			: 0;

	const scoreTrend = getScoreTrend(days.map((day) => day.score));
	const scoreImpactDescription = getScoreImpactDescription(averageScore);

	return (
		<div
			className={`${
				isDarkMode ? "bg-gray-800" : "bg-gray-200"
			} rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out`}>
			<div className='flex items-center justify-between mb-6'>
				<h3
					className={`font-medium text-[80%] md:text-base ${
						isDarkMode ? "text-gray-200" : "text-gray-800"
					}`}>
					Sustainability Performance
				</h3>
				<div className='flex items-center space-x-2'>
					<MdCalendarToday
						className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
					/>
				</div>
			</div>

			{loading ? (
				<Loader />
			) : (
				<>
					<div className='flex justify-between mb-6'>
						{days.map((day) => (
							<div key={day.day} className='text-center'>
								<div
									className={`${
										isDarkMode ? "text-gray-400" : "text-gray-600"
									} mb-1 text-[80%] md:text-base`}>
									{day.day}
								</div>
								<div
									className={`${
										isDarkMode ? "text-gray-100" : "text-gray-600"
									} text-base md:text-xl font-bold`}>
									{day.date}
								</div>
								<div className='flex justify-center gap-0.5 mt-1'>
									{[1, 2, 3].map((_, index) => (
										<div
											key={index}
											className={`w-1 h-1 rounded-full ${getScoreColor(
												day.score
											)}`}
										/>
									))}
								</div>
								<div
									className={`mt-1 text-[70%] ${
										isDarkMode ? "text-gray-500" : "text-gray-500"
									}`}>
									{day.score.toFixed(1)}
								</div>
							</div>
						))}
					</div>

					<div className='text-center'>
						<div
							className={`${
								isDarkMode ? "text-gray-100" : "text-gray-900"
							} text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center`}>
							{averageScore.toFixed(2)}
							<span className='ml-2'>
								{scoreTrend > 0 ? (
									<MdTrendingUp className='text-green-500' />
								) : scoreTrend < 0 ? (
									<MdTrendingDown className='text-red-500' />
								) : null}
							</span>
						</div>
						<div
							className={`${
								isDarkMode ? "text-gray-400" : "text-gray-600"
							} text-[80%] md:text-sm flex items-center justify-center`}>
							{scoreImpactDescription}
							{scoreTrend !== 0 && (
								<span
									className={`ml-2 text-xs ${
										scoreTrend > 0 ? "text-green-500" : "text-red-500"
									}`}>
									{Math.abs(Number(scoreTrend.toFixed(2)))}{" "}
									{scoreTrend > 0 ? "▲" : "▼"}
								</span>
							)}
						</div>
					</div>

					<div
						className={`mt-4 text-[80%] md:text-sm ${
							isDarkMode ? "text-gray-400" : "text-gray-600"
						}`}>
						Key metrics: Energy efficiency, Waste reduction, Water conservation
					</div>
				</>
			)}
		</div>
	);
};

export default SustainabilityScore;
