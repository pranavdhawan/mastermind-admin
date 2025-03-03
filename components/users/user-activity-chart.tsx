"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Mon", value: 4200 },
  { name: "Tue", value: 4500 },
  { name: "Wed", value: 5800 },
  { name: "Thu", value: 6200 },
  { name: "Fri", value: 7500 },
  { name: "Sat", value: 8100 },
  { name: "Sun", value: 7800 },
]

export function UserActivityChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value} users`, "Active Users"]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FA4061"
            strokeWidth={2}
            dot={{ r: 4, fill: "#FA4061", strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#FA4061", strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

