import { Link, useLocation } from "react-router-dom";
import {
    MdHome,
    MdCalendarToday,
    MdInsertChart,
    MdSettings,
    MdLogout,
} from "react-icons/md";
import { ThemeContextUse } from "../context/ThemeProvider";

export default function Sidebar() {
    const location = useLocation();
	const {isDarkMode} = ThemeContextUse();

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
        <aside
            className={`w-18 md:w-42 lg:w-64 p-4 flex flex-col rounded-r-2xl border-r transition-all duration-500 
                ${isDarkMode ? "bg-gray-900/80 backdrop-blur-md shadow-lg border-gray-700" : "bg-white shadow-md border-gray-300"}`}
        >
            {/* Logo */}
            <div className='mb-8'>
                <Link
                    to='/'
                    className={`text-2xl font-extrabold hidden md:flex tracking-[-1px] transition-colors duration-500 
                        ${isDarkMode ? "text-green-500" : "text-green-700"}`}
                >
                    TerraView
                </Link>
                <Link
                    to='/'
                    className={`text-[1rem] font-extrabold md:hidden tracking-[-1px] transition-colors duration-500 
                        ${isDarkMode ? "text-green-500" : "text-green-700"}`}
                >
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
                    <h3 className={`font-medium text-sm md:text-base md:hidden  ${isDarkMode ? "text-white" : "text-black"}`}>Sarah</h3>
                    <h3 className={`font-medium text-sm md:text-base hidden md:flex  ${isDarkMode ? "text-white" : "text-black"}`}>Sarah Connor</h3>
                    <p className={`text-[70%] md:text-sm transition-colors duration-500 
                        ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Admin</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className='flex-1'>
                <ul className='space-y-2'>
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <Link
                                to={link.path}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-500 ease-in-out 
                                    ${location.pathname === link.path ? 
                                        (isDarkMode ? "text-green-500 bg-gray-900/50" : "text-green-700 bg-gray-200") : 
                                        (isDarkMode ? "text-gray-400 hover:text-gray-100" : "text-gray-600 hover:text-gray-900")}`}
                            >
                                {link.icon}
                                <span className='hidden md:flex'>{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom Actions */}
            <div className={`border-t pt-4 space-y-2 transition-colors duration-500 
                ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
            >
                <Link
                    to='/settings'
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-all duration-500 ease-in-out 
                        ${location.pathname === "/settings" ? 
                            (isDarkMode ? "text-green-500 bg-gray-900/50" : "text-green-700 bg-gray-200") : 
                            (isDarkMode ? "text-gray-400 hover:text-gray-100" : "text-gray-600 hover:text-gray-900")}`}
                >
                    <MdSettings className='h-5 w-5' />
                    <span className='hidden md:flex'>Settings</span>
                </Link>
                <button
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-all duration-500 ease-in-out cursor-pointer
                        ${isDarkMode ? "text-gray-400 hover:text-gray-100 hover:bg-red-500" : "text-gray-600 hover:text-white hover:bg-red-500"}`}
                >
                    <MdLogout className='h-5 w-5' />
                    <span className='hidden md:flex'>Log Out</span>
                </button>
            </div>
        </aside>
    );
}
