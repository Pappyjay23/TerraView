import { MdCalendarToday } from "react-icons/md";

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
	return (
		<div className='flex items-center space-x-4 bg-gray-800 p-2 rounded-lg'>
			<MdCalendarToday className='text-gray-400' />
			<input
				type='date'
				value={startDate}
				onChange={(e) => onStartDateChange(e.target.value)}
				className='bg-gray-700 text-white px-2 py-1 rounded'
			/>
			<span className='text-gray-400'>to</span>
			<input
				type='date'
				value={endDate}
				onChange={(e) => onEndDateChange(e.target.value)}
				className='bg-gray-700 text-white px-2 py-1 rounded'
			/>
		</div>
	);
};

export default DateRangeSelector;
