"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { day: "Monday", minutes: 48 },
  { day: "Tuesday", minutes: 56 },
  { day: "Wednesday", minutes: 52 },
  { day: "Thursday", minutes: 50 },
  { day: "Friday", minutes: 45 },
  { day: "Saturday", minutes: 62 },
  { day: "Sunday", minutes: 58 },
]

export function TimeDistributionChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            formatter={(value) => [`${value} minutes`, "Average Study Time"]}
          />
          <Bar dataKey="minutes" fill="#FA4061" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

