import { MdLightMode, MdDarkMode } from "react-icons/md";

interface DarkModeToggleProps {
	isDarkMode: boolean;
	onToggle: () => void;
}

export default function DarkModeToggle({
	isDarkMode,
	onToggle,
}: DarkModeToggleProps) {
	return (
		<button
			onClick={onToggle}
			className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200'
			aria-label='Toggle dark mode'>
			{isDarkMode ? (
				<MdLightMode className='h-5 w-5' />
			) : (
				<MdDarkMode className='h-5 w-5' />
			)}
		</button>
	);
}
