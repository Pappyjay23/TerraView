import { Link, useLocation } from "react-router-dom";
import {
	MdHome,
	MdCalendarToday,
	MdInsertChart,
	MdSettings,
	MdLogout,
} from "react-icons/md";

export default function Sidebar() {
	const location = useLocation();

	const navLinks = [
		{
			title: "Home",
			icon: <MdHome className='h-5 w-5' />,
			path: "/",
		},
		{
			title: "Calendar",
			icon: <MdCalendarToday className='h-5 w-5' />,
			path: "/calendar",
		},
		{
			title: "Statistics",
			icon: <MdInsertChart className='h-5 w-5' />,
			path: "/statistics",
		},
	];

	return (
		<aside className='w-18 md:w-42 lg:w-64 bg-gray-800 p-4 flex flex-col'>
			{/* Logo */}
			<div className='mb-8'>
				<Link
					to='/'
					className='text-green-500 text-2xl font-extrabold hidden md:flex'>
					TerraView
				</Link>
				<Link to='/' className='text-green-500 text-[1rem] font-extrabold md:hidden'>
					Terra
				</Link>
			</div>

			{/* User Profile */}
			<div className='flex flex-col lg:flex-row items-center gap-3 mb-8'>
				<img
					src='https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk='
					alt='User avatar'
					className='w-6 h-6 md:w-10 md:h-10 rounded-full object-cover'
				/>
				<div className='text-center lg:text-left'>
					<h3 className='font-medium text-sm md:text-base md:hidden'>Sarah</h3>
					<h3 className='font-medium text-sm md:text-base hidden md:flex'>Sarah Connor</h3>
					<p className='text-[70%] md:text-sm text-gray-400'>Admin</p>
				</div>
			</div>

			{/* Navigation */}
			<nav className='flex-1'>
				<ul className='space-y-2'>
					{navLinks.map((link) => (
						<li>
							<Link
								to={link.path}
								className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-500 ease-in-out ${
									location.pathname === link.path
										? "text-green-500 bg-gray-900/50"
										: "text-gray-400 hover:text-gray-100"
								}`}>
								{link.icon}
								<span className='hidden md:flex'>{link.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* Bottom Actions */}
			<div className='border-t border-gray-700 pt-4 space-y-2'>
				<Link
					to='/settings'
					className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-all duration-500 ease-in-out ${
						location.pathname === "/settings"
							? "text-green-500 bg-gray-900/50"
							: "text-gray-400 hover:text-gray-100"
					}`}>
					<MdSettings className='h-5 w-5' />
					<span className='hidden md:flex'>Settings</span>
				</Link>
				<button className='flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-100 hover:bg-red-500 cursor-pointer transition-all duration-500 ease-in-out rounded-lg w-full'>
					<MdLogout className='h-5 w-5' />
					<span className='hidden md:flex'>Log Out</span>
				</button>
			</div>
		</aside>
	);
}
