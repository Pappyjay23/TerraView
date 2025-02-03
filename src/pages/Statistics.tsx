import { MdInsertChart } from "react-icons/md";
import { ThemeContextUse } from "../context/ThemeProvider";

export default function Statistics() {
	const { isDarkMode } = ThemeContextUse();

	return (
		<div className={`flex flex-col items-center justify-center h-[calc(100vh-80px)] ${isDarkMode ? "md:bg-gray-900" : "bg-gray-100"} rounded-lg p-6`}>
			<MdInsertChart className={`${isDarkMode ? "text-blue-500" : "text-blue-700"} text-3xl lg:text-5xl mb-4`} />
			<h1 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? "text-white" : "text-blue-700"} mb-2`}>Statistics</h1>
			<p className={`text-base md:text-xl ${isDarkMode ? "text-gray-400" : "text-blue-700"} mb-8 text-center`}>
				Analyze your sustainability metrics
			</p>
			<div className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-8 rounded-lg shadow-lg max-w-md w-full`}>
				<p className={`${isDarkMode ? "text-gray-300" : "text-gray-800"} text-center text-[80%] md:text-base`}>
					The Statistics feature is under development. Soon, you'll be able to
					view detailed analytics and reports on your sustainability efforts.
				</p>
				<div className="mt-6 bg-gray-700 h-2 rounded-full overflow-hidden">
					<div className="bg-blue-500 h-full w-2/5 rounded-full"></div>
				</div>
				<p className={`${isDarkMode ? "text-gray-400" : "text-gray-800"} text-sm text-center mt-2 text-[80%] md:text-base`}>
					Feature completion: 40%
				</p>
			</div>
		</div>
	);
}