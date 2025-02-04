import { MdCalendarToday } from "react-icons/md";
import { ThemeContextUse } from "../context/ThemeProvider";

interface DateRangeSelectorProps {
	startDate: string;
	endDate: string;
	onStartDateChange: (date: string) => void;
	onEndDateChange: (date: string) => void;
}

const DateRangeSelector = ({
	startDate,
	endDate,
	onStartDateChange,
	onEndDateChange,
}: DateRangeSelectorProps) => {
	const { isDarkMode } = ThemeContextUse();

	return (
		<div 
			className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
				isDarkMode 
					? "bg-gray-800 text-gray-200" 
					: "bg-gray-100 text-gray-800"
			}`}
		>
			<MdCalendarToday 
				className={`${
					isDarkMode ? "text-gray-400" : "text-gray-600"
				}`} 
			/>
			<input
				type='date'
				value={startDate}
				onChange={(e) => onStartDateChange(e.target.value)}
				className={`bg-transparent text-sm outline-none w-28 ${
					isDarkMode 
						? "text-gray-200 placeholder-gray-500" 
						: "text-gray-800 placeholder-gray-600"
				}`}
			/>
			<span 
				className={`text-sm ${
					isDarkMode ? "text-gray-400" : "text-gray-600"
				}`}
			>
				to
			</span>
			<input
				type='date'
				value={endDate}
				onChange={(e) => onEndDateChange(e.target.value)}
				className={`bg-transparent text-sm outline-none w-28 ${
					isDarkMode 
						? "text-gray-200 placeholder-gray-500" 
						: "text-gray-800 placeholder-gray-600"
				}`}
			/>
		</div>
	);
};

export default DateRangeSelector;