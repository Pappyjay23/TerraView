import { MdCalendarToday } from "react-icons/md";
import { ThemeContextUse } from "../context/ThemeProvider";

const Calendar = () => {
	const { isDarkMode } = ThemeContextUse();
	return (
		<div
			className={`flex flex-col items-center justify-center h-[calc(100vh-80px)] ${
				isDarkMode ? "md:bg-gray-900" : "bg-gray-100"
			} rounded-lg p-6`}>
			<MdCalendarToday
				className={`${
					isDarkMode ? "text-green-500" : "text-green-700"
				} text-3xl lg:text-5xl mb-4`}
			/>
			<h1
				className={`text-2xl md:text-3xl font-bold ${
					isDarkMode ? "text-white" : "text-green-700"
				} mb-2`}>
				Calendar
			</h1>
			<p
				className={`text-base md:text-xl ${
					isDarkMode ? "text-gray-400" : "text-green-700"
				} mb-8 text-center`}>
				Schedule and manage your sustainability events
			</p>
			<div
				className={`${
					isDarkMode ? "bg-gray-800" : "bg-gray-200"
				} p-8 rounded-lg shadow-lg max-w-md w-full`}>
				<p
					className={`${
						isDarkMode ? "text-gray-300" : "text-gray-800"
					} text-center text-[80%] md:text-base`}>
					The Calendar feature is under development. Soon, you'll be able to
					schedule and track sustainability-related events and milestones.
				</p>
				<div className='mt-6 bg-gray-700 h-2 rounded-full overflow-hidden'>
					<div className='bg-green-500 h-full w-1/3 rounded-full'></div>
				</div>
				<p
					className={`${
						isDarkMode ? "text-gray-400" : "text-gray-800"
					} text-sm text-center mt-2 text-[80%] md:text-base`}>
					Feature completion: 33%
				</p>
			</div>
		</div>
	);
};

export default Calendar;
