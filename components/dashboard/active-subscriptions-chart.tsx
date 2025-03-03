"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1400 },
  { name: "Mar", value: 1650 },
  { name: "Apr", value: 1500 },
  { name: "May", value: 1800 },
  { name: "Jun", value: 2100 },
  { name: "Jul", value: 2400 },
  { name: "Aug", value: 2700 },
  { name: "Sep", value: 2834 },
]

export function ActiveSubscriptionsChart() {
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
            formatter={(value) => [`${value} subscriptions`, "Active Subscriptions"]}
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

