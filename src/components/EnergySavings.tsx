import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "00:00", value: 30 },
  { name: "04:00", value: 45 },
  { name: "08:00", value: 75 },
  { name: "12:00", value: 65 },
  { name: "16:00", value: 85 },
  { name: "20:00", value: 55 },
  { name: "23:59", value: 45 },
]

export default function EnergySavings() {
  return (
    <div className="bg-gray-800 rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Energy Savings</h3>
        <span className="text-xs text-gray-400">Weekly Overview</span>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#4b5563"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Area type="monotone" dataKey="value" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

