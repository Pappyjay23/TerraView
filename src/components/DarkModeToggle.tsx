import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContextUse } from "../context/ThemeProvider";

export default function DarkModeToggle() {
	const { isDarkMode, toggleTheme } = ThemeContextUse();

	return (
		<button
			onClick={toggleTheme}
			className={`p-2 rounded-full ${
				isDarkMode
					? "bg-gray-700 text-gray-200 hover:bg-gray-600"
					: "bg-gray-200 text-gray-800 hover:bg-gray-300"
			} transition-colors duration-500 ease-in-out cursor-pointer`}
			aria-label='Toggle dark mode'>
			{isDarkMode ? (
				<MdLightMode className='h-5 w-5' />
			) : (
				<MdDarkMode className='h-5 w-5' />
			)}
		</button>
	);
}
