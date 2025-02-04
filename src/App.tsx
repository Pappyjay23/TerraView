import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MdSearch, MdNotifications } from "react-icons/md";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeContextUse } from "./context/ThemeProvider";

const App = () => {
	const { isDarkMode } = ThemeContextUse();

	return (
		<Router>
			<div
				className={`flex h-screen ${
					isDarkMode ? "bg-gray-900" : "bg-white"
				}  text-gray-100`}>
				<Sidebar />

				<div className='flex-1 overflow-auto'>
					<header
						className={`flex items-center justify-between p-4 border-b w-full overflow-auto transition-all duration-500 ease-in-out ${
							isDarkMode
								? "border-gray-800 bg-gray-900 text-gray-200"
								: "border-gray-300 bg-white text-gray-900"
						}`}>
						<h1 className='text-[1rem] font-semibold hidden md:flex'>
							Sustainability Dashboard
						</h1>
						<div className='flex items-center gap-2 md:gap-4'>
							<div className='relative'>
								<MdSearch
									className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${
										isDarkMode ? "text-gray-400" : "text-gray-500"
									}`}
								/>
								<input
									type='text'
									placeholder='Search something...'
									className={`pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 transition-all duration-500 ease-in-out ${
										isDarkMode
											? "bg-gray-800 text-gray-200 focus:ring-green-500"
											: "bg-gray-100 text-gray-900 focus:ring-green-600"
									}`}
								/>
							</div>
							<DarkModeToggle />
							<button
								className={`p-2 rounded-full transition-all duration-500 ease-in-out cursor-pointer ${
									isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
								}`}>
								<MdNotifications className='h-5 w-5' />
							</button>
							<button
								className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-500 ease-in-out ${
									isDarkMode
										? "bg-green-600 text-gray-200 hover:bg-green-700"
										: "bg-green-500 text-white hover:bg-green-600"
								}`}>
								Upgrade
							</button>
						</div>
					</header>

					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/calendar' element={<Calendar />} />
						<Route path='/statistics' element={<Statistics />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
