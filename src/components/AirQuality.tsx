import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { day: "Mon", value: 4.5 },
  { day: "Tue", value: 3.8 },
  { day: "Wed", value: 4.2 },
  { day: "Thu", value: 3.9 },
  { day: "Fri", value: 4.1 },
]

export default function AirQuality() {
  return (
    <div className="bg-gray-800 rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Air Quality Index</h3>
        <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Good</span>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
            <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

