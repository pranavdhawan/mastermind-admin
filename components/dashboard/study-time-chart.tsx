"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", value: 25 },
  { name: "Feb", value: 28 },
  { name: "Mar", value: 32 },
  { name: "Apr", value: 30 },
  { name: "May", value: 35 },
  { name: "Jun", value: 40 },
  { name: "Jul", value: 45 },
  { name: "Aug", value: 48 },
  { name: "Sep", value: 52 },
]

export function StudyTimeChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value} minutes`, "Average Study Time"]}
          />
          <Area type="monotone" dataKey="value" stroke="#FA4061" fill="rgba(250, 64, 97, 0.2)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

