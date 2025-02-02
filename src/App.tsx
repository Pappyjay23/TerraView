import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MdSearch, MdNotifications } from "react-icons/md"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Calendar from "./pages/Calendar"
import Statistics from "./pages/Statistics"
import Settings from "./pages/Settings"

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        <Sidebar />

        <div className="flex-1 overflow-auto">
          <header className="flex items-center justify-between p-4 border-b border-gray-800">
            <h1 className="text-xl font-semibold">Sustainability Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search something..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-500 ease-in-out"
                />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-800 transition-all duration-500 ease-in-out cursor-pointer">
                <MdNotifications className="h-5 w-5" />
              </button>
              <button className="px-4 py-2 bg-green-600 text-gray-200 rounded-full text-sm font-medium hover:bg-green-700 cursor-pointer transition-all duration-500 ease-in-out">
                Upgrade
              </button>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

