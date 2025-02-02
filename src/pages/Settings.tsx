import { MdSettings } from "react-icons/md"

export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] md:bg-gray-900 rounded-lg p-6">
      <MdSettings className="text-purple-500 text-3xl lg:text-5xl mb-4" />
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Settings</h1>
      <p className="text-base md:text-xl text-gray-400 mb-8 text-center">Customize your sustainability dashboard</p>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <p className="text-gray-300 text-center text-[80%] md:text-base">
          The Settings feature is under development. Soon, you'll be able to personalize your dashboard, set goals, and
          configure notifications.
        </p>
        <div className="mt-6 bg-gray-700 h-2 rounded-full overflow-hidden">
          <div className="bg-purple-500 h-full w-1/5 rounded-full"></div>
        </div>
        <p className="text-gray-400 text-sm text-center mt-2 text-[80%] md:text-base">Feature completion: 20%</p>
      </div>
    </div>
  )
}

