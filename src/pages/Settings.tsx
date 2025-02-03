import { MdSettings } from "react-icons/md"
import { ThemeContextUse } from "../context/ThemeProvider"

export default function Settings() {
  const {isDarkMode} = ThemeContextUse()
  return (
    <div className={`flex flex-col items-center justify-center h-[calc(100vh-80px)] ${isDarkMode ? "md:bg-gray-900" : "bg-gray-100"} rounded-lg p-6`}>
      <MdSettings className={`${isDarkMode ? "text-purple-500" : "text-purple-700"} text-3xl lg:text-5xl mb-4`} />
      <h1 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? "text-white" : "text-purple-700"} mb-2`}>Settings</h1>
      <p className={`text-base md:text-xl ${isDarkMode ? "text-gray-400" : "text-purple-700"} mb-8 text-center`}>Customize your sustainability dashboard</p>
      <div className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-8 rounded-lg shadow-lg max-w-md w-full`}>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-800"} text-center text-[80%] md:text-base`}>
          The Settings feature is under development. Soon, you'll be able to personalize your dashboard, set goals, and
          configure notifications.
        </p>
        <div className="mt-6 bg-gray-700 h-2 rounded-full overflow-hidden">
          <div className="bg-purple-500 h-full w-1/5 rounded-full"></div>
        </div>
        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-800"} text-sm text-center mt-2 text-[80%] md:text-base`}>Feature completion: 20%</p>
      </div>
    </div>
  )
}