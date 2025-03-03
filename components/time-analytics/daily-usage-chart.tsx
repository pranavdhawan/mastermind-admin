"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { time: "12 AM", users: 120 },
  { time: "2 AM", users: 80 },
  { time: "4 AM", users: 40 },
  { time: "6 AM", users: 180 },
  { time: "8 AM", users: 460 },
  { time: "10 AM", users: 980 },
  { time: "12 PM", users: 1240 },
  { time: "2 PM", users: 1580 },
  { time: "4 PM", users: 2450 },
  { time: "6 PM", users: 2180 },
  { time: "8 PM", users: 1680 },
  { time: "10 PM", users: 780 },
]

export function DailyUsageChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value} users`, "Active Users"]}
          />
          <Area type="monotone" dataKey="users" stroke="#FA4061" fill="rgba(250, 64, 97, 0.2)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

